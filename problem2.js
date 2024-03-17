let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagramMap = {};
for (let i = 0; i < strs.length; i++) {
  const word = strs[i];
  const sortedWord = word.split("").sort().join("");
  if (!anagramMap[sortedWord]) {
    anagramMap[sortedWord] = [];
  }
  anagramMap[sortedWord].push(word);
}
  console.log(anagramMap);

const result = [];
for (const key in anagramMap) {
  result.push(anagramMap[key]);
}

console.log(result);