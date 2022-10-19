import { gql } from "apollo-server-express/dist";

export default gql`
  type Subscription {
    roomUpdates(id: Int!): Message
  }
`;
