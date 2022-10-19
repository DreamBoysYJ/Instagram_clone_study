import pubsub from "../../pubsub";
import { NEW_MESSAGE } from "../../constants";
import { withFilter } from "apollo-server-express/dist";

export default {
  Subscription: {
    roomUpdates: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(NEW_MESSAGE),
        ({ roomUpdates }, { id }) => {
          return roomUpdates.roomId === id;
        }
      ),
    },
  },
};
