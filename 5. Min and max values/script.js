function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max, min };
}

const arr = [5, 2, 7, 1, 9];
const result = findMaxAndMin(arr);
console.log(result); 
