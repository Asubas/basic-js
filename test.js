function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let j = 0; j < matrix[0].length; j++) { 
    for (let i = 0; i < matrix.length; i++) { 
      if (matrix[i][j] === 0) {
        break;
      }
      sum += matrix[i][j];
    }
  }
  return sum;
}
console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]));
