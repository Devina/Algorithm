/* Counting Zeros Algorithm - Count total number of zeros from 1 upto num*/

function countZero(num) {
  let count = 0;
  while(num > 0) {
    count += Math.floor(num/10);
    num = num/10;
  }
  return count;
}

/* Note: For num = 100, number of 0 would be 11 (10, 20, 30, 40, 50, 60, 70, 80, 90, 100). 100 has two zeros. */
