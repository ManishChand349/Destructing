function extractFirstSecondLast(arr) {
  const [first, second, ...rest] = arr;
  const last = rest.pop();
  return [first, second, last];
}
const input = [1, 2, 3, 4, 5];
const output = extractFirstSecondLast(input);
console.log(output);
