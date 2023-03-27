function wordCount(str) {
  const words = str.split(" ");

  const wordCounts = new Map();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const count = wordCounts.get(word) || 0;
    wordCounts.set(word, count + 1);
  }

  return wordCounts;
}
const text = "Pure Hardwork, No Shortcuts!";
const counts = wordCount(text);
console.log(counts);
