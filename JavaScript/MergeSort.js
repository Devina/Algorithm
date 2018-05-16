/* Merge Sort Algorithm */

function mergeSort(arr) {
   const len = arr.length;

   if(len <2) return arr;

   const mid = Math.floor(len/2);
   let left = arr.slice(0,mid), right = arr.slice(mid);

   return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [], l = 0, r = 0;
  const lLen = left.length, rLen = right.length;

  while(l < lLen && r < rLen) {
     if(left[l] < right[r]) result.push(left[l++]);
     else result.push(right[r++]);
  }

  return result.concat(left.slice(l)).concat(right.slice(r));
}
