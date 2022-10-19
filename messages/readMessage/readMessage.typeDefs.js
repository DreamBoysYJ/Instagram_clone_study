import { gql } from "apollo-server-express/dist";

export default gql`
  type Mutation {
    readMessage(id: Int!): MutationResponse!
  }
`;
