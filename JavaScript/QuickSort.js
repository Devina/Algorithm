/* Quick Sort Algorithm */

function quickSort(array) {
  if(array.length <= 1) return array;

  let pivot = Math.floor((array.length -1)/2), val = array[pivot], less = [], more = [];

  array.splice(pivot, 1);

  array.forEach((e, i, a) => {e < val ? less.push(e) : more.push(e);});

  return (quickSort(less)).concat([val],quickSort(more))
}
