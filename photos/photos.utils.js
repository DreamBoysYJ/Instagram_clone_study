export const processHashtags = (caption) => {
  const hashtags = cation.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g) || [];
  return hashtags.map((hashtag) => ({
    where: { hashtag },
    create: { hashtag },
  }));
};
