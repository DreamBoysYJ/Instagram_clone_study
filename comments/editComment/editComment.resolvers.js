import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editComment: protectedResolver(
      async (_, { id, payload }, { loggedInUser }) => {
        const comment = await clientInformation.comment.findUnique({
          where: {
            id,
          },
          select: {
            userId: true,
          },
        });
        if (!comment) {
          return {
            ok: false,
            error: "Comment Not found",
          };
        } else if (comment.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        } else {
          await client.comment.update({
            where: {
              id,
            },
            data: {
              payload,
            },
          });
          return {
            ok: true,
          };
        }
      }
    ),
  },
};
