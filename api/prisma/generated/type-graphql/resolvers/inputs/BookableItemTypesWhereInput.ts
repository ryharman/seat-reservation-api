import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookableItemListRelationFilter } from "../inputs/BookableItemListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookableItemTypesWhereInput {
  @TypeGraphQL.Field(_type => [BookableItemTypesWhereInput], {
    nullable: true
  })
  AND?: BookableItemTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesWhereInput], {
    nullable: true
  })
  OR?: BookableItemTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookableItemTypesWhereInput], {
    nullable: true
  })
  NOT?: BookableItemTypesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  createdAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updatedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookableItemListRelationFilter, {
    nullable: true
  })
  bookableItems?: BookableItemListRelationFilter | undefined;
}