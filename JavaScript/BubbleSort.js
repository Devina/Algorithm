/* Bubble Sort Algorithm */

function bubbleSort(array) {
  let swap, n = array.length-1, x = array;

  do {
    swap = false;
    for(let i = 0; i < n; i++) {
      if(x[i] > x[i+1]) {
        let temp = x[i];
        x[i] = x[i+1];
        x[i+1] = temp;
        swap = true;
      }
    }
    n--;
  } while(swap);

  return x;
}
