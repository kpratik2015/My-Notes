/**
Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

{1, 2, 3}
{1, 3, 2}
{2, 1, 3}
{2, 3, 1}
{3, 1, 2}
{3, 2, 1}
If a set has ‘n’ distinct elements it will have n!
n!
 permutations.

Example 1:

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]

Time complexity: O(N * N!)

We know that there are a total of N! permutations of a set with ‘N’ numbers. To insert a number into a permutation of size ‘N’ will take O(N)

 */

const find_permutations = function (nums) {
  const result = [];
  const permutes = [];
  permutes.push([]);
  // for every num in nums
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const n = permutes.length;
    // for every intermediate permutation in permutes
    for (let j = 0; j < n; j++) {
      const currPermute = permutes[j];
      // size will be +1 as inserting num in each place of prev. permute
      for (let k = 0; k < currPermute.length + 1; k++) {
        const clonedPermute = [...currPermute];
        clonedPermute.splice(k, 0, num); // at k we insert the num;
        if (clonedPermute.length === nums.length) {
          result.push(clonedPermute);
        } else {
          permutes.push(clonedPermute);
        }
      }
    }
  }
  return result;
};

console.log("Here are all the permutations:");
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});

const permutationRecursively = (nums) => {
  const permutes = [];
  findPermutationRecursively(nums, 0, [], permutes); // start with empty array as 1 place to fill
};

function findPermutationRecursively(nums, idx, currentPermutation, permutes) {
  if (currentPermutation.length === nums.length) {
    permutes.push(currentPermutation);
  } else {
    // note + 1
    for (let i = 0; i < currentPermutation.length + 1; i++) {
      let clonedPermute = [...currentPermutation];
      clonedPermute.splice(i, 0, nums[idx]); // insert nums[idx] at index/place 'i'
      findPermutationRecursively(nums, idx + 1, clonedPermute, permutes);
    }
  }
}
