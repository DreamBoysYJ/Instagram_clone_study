import { gql } from "apollo-server";
export default gql`
  type User {
    id: String!
    firstName: String!
    lastName: String
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    bio: String
    avatar: String
    following: [User]
    followers: [User]
    totalFollwing: Int!
    totalFollwers: Int!
    isMe: Boolean!
    isFollowing: Boolean!
  }
`;

//isFollowing: Boolean!
//isMe: Boolean!
