import { gql } from "apollo-server-express/dist";

export default gql`
  type Query {
    seeRoom(id: Int!): Room
  }
`;
