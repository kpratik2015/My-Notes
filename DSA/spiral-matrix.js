/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // order: Right Down   Left    Up
  // i.e.   0,1   -1,0   -1,-1   1,0
  // we go in one direction until we overflow or next element is traversed already
  // [0,2] => [1,2] => [2,2] => [2,1] => [2,0] => [1,0]

  let i = 0;
  let j = 0;
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIdx = 0;
  let spiral = [];

  function isValidIdx(i, j) {
    return i >= 0 && j >= 0 && i < matrix.length && j < matrix[0].length;
  }

  while (true) {
    let currDirection = directions[dirIdx];
    while (isValidIdx(i + currDirection[0], j + currDirection[1])) {
      if (matrix[i + currDirection[0]][j + currDirection[1]] === Infinity) {
        break;
      }
      spiral.push(matrix[i][j]);
      matrix[i][j] = Infinity;
      i += currDirection[0];
      j += currDirection[1];
    }
    // console.log('i ', i, j);
    let validFourWayIndices = directions.map(([x, y]) => [i + x, j + y]).filter(([x, y]) => isValidIdx(x, y));
    let anyNumberLeft = validFourWayIndices.filter(([x, y]) => matrix[x][y] !== Infinity).length > 0;
    // console.log('anyNumberLeft ', anyNumberLeft, validFourWayIndices);
    if (!anyNumberLeft) {
      break;
    }
    dirIdx = (dirIdx + 1) % 4;
  }

  spiral.push(matrix[i][j]);

  return spiral;
};