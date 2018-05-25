/* Euclidean Algorithm - Greatest common divisor*/

function euclideanAlgorithm(numX, numY) {
  const x = Math.abs(numX);
  const y = Math.abs(numY);

  if (x === 0 && y === 0) return null;
  if (x === 0 && y !== 0) return y;
  if (x !== 0 && y === 0) return x;
  if (x > y) return euclideanAlgorithm(x % y, y);

  return euclideanAlgorithm(y % x, x);
}
