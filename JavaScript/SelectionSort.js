/* Selection Sort Algorithm */

function selectionSort(array) {
  let minIndex, temp, n = array.length;

  for (let i = 0; i < n; i++) {
    minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }

  return array;
}
