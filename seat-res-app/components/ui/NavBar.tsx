import React from "react";
import { Icon } from ".";
import Link from "next/link";
import { useRouter } from "next/router";
import StyledLink from "./StyledLink";

const menu = [
  {
    title: "General",
    showTitle: false,
    links: [
      {
        title: "Home",
        path: "/home",
        icon: "building",
      },
      {
        title: "Reservations",
        path: "/reservations",
        icon: "calendar",
      },
    ],
  },
  {
    title: "Management",
    showTitle: true,
    links: [
      {
        title: "Buildings",
        path: "/buildings",
        icon: "building",
      },
      {
        title: "Offices",
        path: "/offices",
        icon: "building",
      },
      {
        title: "Manager Calendar",
        path: "/manager-calendar",
        icon: "calendar",
      },
      {
        title: "Reports",
        path: "/reports",
        icon: "folder",
      },
    ],
  },
  // {
  //   title: "Quick Links",
  //   showTitle: true,
  //   links: [
  //     {
  //       title: "Settings",
  //       path: "/settings",
  //       icon: "syncArrow",
  //     },
  //   ],
  // },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <header className="w-56 min-h-screen py-4 px-6 flex flex-grow flex-col justify-between bg-gray-50">
      <div>
        <div className="flex gap-2 items-center mb-6">
          <Icon icon="notepad" height={20} width={20} className="text-blue-500" />
          <div className="text-xl text-gray-900">Reserve</div>
        </div>
        {menu.map((menuItem, idx) => {
          return (
            <div key={idx} className="flex flex-col gap-2 text-xs">
              {menuItem.showTitle && <h5 className="text-gray-400 mt-4">{menuItem.title}</h5>}
              {menuItem.links.map((link, idx) => {
                return (
                  <ListItem
                    icon={link.icon}
                    text={link.title}
                    current={router.pathname === link.path}
                    link={link.path}
                    key={idx}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <ListItem
          icon="syncArrow"
          text="Settings"
          current={router.pathname === "/settings"}
          link="/settings"
        />
        <ListItem
          icon="logout"
          text="Log out"
          current={router.pathname === "/login"}
          link="/login"
        />
      </div>
    </header>
  );
};

interface ListItemProps {
  icon: string;
  text: string;
  current: boolean;
  link: string;
}

const ListItem = ({ icon, text, current, link }: ListItemProps) => {
  return (
    <div
      className={`${
        current ? "text-blue-500 bg-blue-50 hover:bg-blue-100" : "hover:bg-gray-100"
      } p-2 rounded-md cursor-pointer transition-all`}
    >
      <StyledLink href={link} className="flex items-center gap-2" hideUnderline={true}>
        <Icon icon={icon} height={12} width={12} />
        {text}
      </StyledLink>
    </div>
  );
};

export default NavBar;
