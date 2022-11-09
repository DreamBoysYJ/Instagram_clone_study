import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";
import { protectedResolver } from "../../users/users.utils";
import { processHashtags } from "../photos.utils";

const resolverFn = async (_, { file, caption }, { loggedInUser }) => {
  let hashtagObj = [];
  if (caption) {
    hashtagObj = processHashtags(caption);
  }
  const { filename, createReadStream } = await file;
  const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
  const readStream = createReadStream();
  const writeStream = createWriteStream(
    process.cwd() + "/uploads/photos/" + newFilename
  );
  readStream.pipe(writeStream);
  fileUrl = `http://localhost:4000/static/${newFilename}`;

  return client.photo.create({
    data: {
      file: fileUrl,
      caption,
      user: {
        connect: {
          id: loggedInUser.id,
        },
      },
      ...(hashtagObj.length > 0 && {
        hashtags: {
          connectOrCreate: hashtagObj,
        },
      }),
    },
  });
};

export default {
  Mutation: {
    uploadPhoto: protectedResolver(resolverFn),
  },
};
