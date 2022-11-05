/**
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
 */
const make_squares = function (arr) {
  let n = arr.length;
  let highestSqIdx = n - 1;
  let squares = Array(n).fill(0);
  let left = 0,
    right = n - 1;

  while (left <= right) {
    let leftSq = arr[left] ** 2;
    let rightSq = arr[right] ** 2;
    if (leftSq > rightSq) {
      squares[highestSqIdx] = leftSq;
      left += 1;
    } else {
      squares[highestSqIdx] = rightSq;
      right -= 1;
    }
    highestSqIdx -= 1;
  }

  return squares;
};
