function minesweeper(matrix) {
  let newMatrix = matrix;
  let count = 0;
  for(let i = 0 ; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] === true){
        newMatrix[i][j] = 1; 
      }
        if(matrix[i][j] === false){
          if(i > 0 && j > 0){
            if(matrix[i - 1][j] === true || matrix[i + 1][j] === true || matrix[i][j + 1] === true || matrix[i][j - 1] === true
              || matrix[i - 1][j - 1] === true || matrix[i - 1][j + 1] === true || matrix[i + 1][j + 1] || matrix[i + 1][j - 1]){
              count ++;
            }
            newMatrix[i][j] = count;
            count = 0;
          }
        }
    }
  }return newMatrix;
}

console.log(minesweeper(
  [
  [true, false, false],
  [false, true, false],
  [false, false, false]]));