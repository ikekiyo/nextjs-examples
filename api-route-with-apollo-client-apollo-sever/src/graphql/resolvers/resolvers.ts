import { Resolvers } from "~/graphql/generated/resolvers-types";

import * as mutation from "~/graphql/resolvers/mutation";
import * as query from "~/graphql/resolvers/query";

export const resolvers: Resolvers = {
  Query: query,
  Mutation: mutation,
};
