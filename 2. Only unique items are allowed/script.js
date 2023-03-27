function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const nums = [1, 2, 2, 3, 3, 4, 0, 0];
const uniqueNums = removeDuplicates(nums);
console.log(uniqueNums);
