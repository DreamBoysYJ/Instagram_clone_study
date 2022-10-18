import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadPhoto = async (file, userId) => {
  console.log(file, "d", userId);
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  console.log(filename, createReadStream, readStream);
  const objectName = `${userId}-${Date.now()}-${filename}`;
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "insta-clone-study1-youngju",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  console.log(Location);
  return Location;
};
