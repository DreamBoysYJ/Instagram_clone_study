import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  console.log("working?");
  const { filename, createReadStream } = await file;
  console.log(filename);
  console.log(createReadStream);
  const readStream = createReadStream();
  console.log("그럼 뭐야 대체");
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  console.log("어라씨발?", objectName);

  // 왜 작동을 안함?
  const { Location } = await new AWS.S3()
    .upload({
      Bucket: "insta-clone-study1-youngju",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
