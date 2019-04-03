function quickSort(arr) {
  if (arr.length < 2) return arr;

  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr[pivotIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      arr[i] > pivot ? right.push(arr[i]) : left.push(arr[i]);
    }
  }
 
  return [
    ...quickSort(left),
    pivot,
    ...quickSort(right)
  ]

}

const items = [1, 2, 3, 4, 22, 321, 32, 2265];
console.log('===============>', quickSort(items));