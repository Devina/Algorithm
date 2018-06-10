/* Inverse Matrix */

function matInverse(matrix) {

  let size = matrix.length;

  for (let j = 0; j < size; j++) {
    if (matrix[j].length !== size) return undefined;
  }

  if (!determinant(matrix)) return undefined;

  let extended = [];
  for (let j = 0; j < size; j++) {
    extended.push([]);
    for (let k = 0; k < 2 * size; k++) {
      extended[j][k] = (k < size) ? matrix[j][k] : (k === j + size) ? 1 : 0;
    }
  }

  let temp;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j) {
        temp = extended[j][i];
        for (let k = 0; k < 2 * size; k++) {
          extended[j][k] /= temp;
        }
      } else {
        temp = extended[j][i] / extended[i][i];
        for (let k = 0; k < 2 * size; k++) {
          extended[j][k] -= temp * extended[i][k];
        }
      }
    }
  }

  let inverse = '';
  for (let j = 0; j < size; j++) {
    extended[j].splice(0, size);
    for (let i = 0; i < size; i++) {
      inverse += extended[j][i].toFixed(2) + '\t';
    }
    inverse += '\n';
  }

  return inverse;
}

function determinant(matrix) {
  let size = matrix.length;

  let det = 0;
  let smallMatrix;

  for (let j = 0; j < size; j++) {
    if (matrix[j].length !== size) return undefined;
  }

  switch (size) {
    case 1:
      return matrix[0];

    case 2:
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    default:
      for (let i = 0; i < size; i++) {
        smallMatrix = [];
        for (let j = 1; j < size; j++) {
          smallMatrix.push([]);
          for (let k = 0; k < size; k++) {
            if (k !== i) smallMatrix[j-1].push(matrix[j][k]);
          }
        }
        i % 2 ? det -= matrix[0][i] * determinant(smallMatrix) : det += matrix[0][i] * determinant(smallMatrix);
      }
      return det;
  }
}
