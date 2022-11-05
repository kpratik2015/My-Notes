/**
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * Category: Hard. Note that the path does not need to pass through the root.
 */
var maxPathSum = function (root) {
  let max = -Infinity;

  const findSums = (node) => {
    // Base case / hit a null
    if (!node) return 0;

    let left = findSums(node.left),
      right = findSums(node.right),
      allSum = left + right + node.val,
      leftNodeSum = left + node.val,
      rightNodeSum = right + node.val;

    // Max is all possible combinations
    max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);

    // Return the MAX path, which can be node.val, left + node.val, or right + node.val
    return Math.max(leftNodeSum, rightNodeSum, node.val);
  };

  findSums(root);

  return max;
};
