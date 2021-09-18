import React, { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import { format } from "date-fns";
import { Office } from "../../types";
import { officesQuery } from ".";
import { Layout, Button, Card, PageTitle, Subheading } from "../../components/ui";
import OfficeManagersTable from "./components/OfficeManagersTable";

interface OfficeProps {
  officeData: Office;
}

export default function OfficePage({ officeData }: OfficeProps) {
  console.log(officeData);
  const formattedCreatedAt = format(new Date(officeData.createdAt), "dd/MM/yyyy");

  return (
    <main className="px-8 py-2">
      <Head>
        <title>Seat Reservation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle margin="mb-0">
        {officeData.name}
        <Button primary onClick={() => {}}>
          Edit
        </Button>
      </PageTitle>
      <Subheading>
        <div>Created on {formattedCreatedAt}</div>
        <div>
          Located in{" "}
          <Link href={`/buildings/${officeData.building?.id}`}>
            <a>{officeData.building?.name}</a>
          </Link>
        </div>
      </Subheading>
      <Card className="w-96">
        <div className="font-semibold text-lg px-4 pb-2 mb-2 border-b border-gray-300">Office Managers</div>
        <OfficeManagersTable data={officeData.officeManagers} />
      </Card>
    </main>
  );
}

OfficePage.setLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// We prerender the pages using the static paths function due to the estimated lack of
// buildings within the database. This might not be scalable? Need to read more of the docs

export async function getStaticPaths() {
  const data = await officesQuery();
  const paths = data.offices.map((office: Office) => ({
    params: { id: office.id.toString() },
  }));
  return { paths, fallback: "blocking" };
}

export async function getStaticProps() {
  const data = await officeQuery();
  return {
    props: {
      officeData: data.office,
    },
  };
}

export const officeQuery = async () => {
  const { data } = await client.query({
    query: gql`
      query OfficeData {
        office(where: { id: 1 }) {
          id
          name
          createdAt
          building {
            id
            name
          }
          officeManagers {
            id
            createdAt
            user {
              id
              firstName
              lastName
            }
          }
        }
      }
    `,
  });
  return data;
};
