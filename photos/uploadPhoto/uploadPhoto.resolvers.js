import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        if (caption) {
          // parse caption
          // get or create Hashtags
        }
        // save photo with parsed hashtags
        // add the photo to the hashtags
      }
    ),
  },
};
