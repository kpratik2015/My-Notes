/**
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 * 
 *     1   ___
     /       \
    2         3
   |
  4           
 * I/P: root = [1,2,3,4]
 * O/P: root = [1,3,4]
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let result = [];
  let temp = [];

  function helper(root, level = 0) {
    if (!root) {
      return;
    }
    temp.push({ val: root.val, level });
    if (root.left) {
      helper(root.left, level + 1);
    }
    if (root.right) {
      helper(root.right, level + 1);
    }
  }

  helper(root);
  temp.forEach(t => {
    result[t.level] = t.val;
  })
  return result;
};