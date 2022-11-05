/**
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
 */
const search_triplets = function (arr) {
  let triplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i - 1] === arr[i]) {
      // skip duplicates as they're next to each other
      i++;
    }
    // x + y + z === 0 => x + y === -z
    searchPair(arr, -arr[i], i + 1, triplets);
  }
  function searchPair(arr, target, left, triplets) {
    let l = left,
      r = arr.length - 1;
    while (l < r) {
      let currSum = arr[l] + arr[r];
      if (currSum === target) {
        triplets.push([-target, arr[l], arr[r]]);
        l += 1;
        r -= 1;
        while (l < r && arr[l] === arr[l - 1]) {
          l += 1;
        }
        while (l < r && arr[r] === arr[r + 1]) {
          r -= 1;
        }
      } else if (currSum > target) {
        r -= 1;
      } else {
        l += 1;
      }
    }
  }
  return triplets;
};
