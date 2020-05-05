const transpose = function(matrix) {
  const rows = matrix[0].length;
  let result = [];
  for (let i = 0; i < rows; i++) {
    result.push([])
  }
  for (let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < rows; j++){
      result[j].push([matrix[i][j]])
    }
  }
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));