/* Remove Duplicates (from array) Algorithm */

function removeDuplicates(array) {
  return array.filter((item, pos) => array.indexOf(item) == pos);
}
