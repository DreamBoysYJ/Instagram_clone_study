function getFirstLetter(sentence) {
  if (sentence === "") {
    return "";
  }

  let words = sentence.split(" ");

  let result = "";
  for (let i = 0; i < words.length; i += 1) {
    result = result + words[i].slice(0, 1);
  }
  return result;
}

let output = getFirstLetter("Code States");
console.log(output); // <- CS

output = getFirstLetter("코드스테이츠에 오신 것을 환영합니다.");
console.log(output); // <- 코오것환
