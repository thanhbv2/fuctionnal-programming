const items = [1, 34, 42, 23, 88, 11, 2, 4];


function findIndexLargest(arr) {
  let mMax = arr[0];
  let mIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > mMax) {
      mMax = arr[i];
      mIndex = i;
    }
  }

  return mIndex;
}


function selectionSort(arr) {
  let newArr = []
  let mIndex = 0;
  while (arr.length) {
    mIndex = findIndexLargest(arr);
    newArr.push(arr[mIndex]);
    arr.splice(mIndex, 1)
  }
  return newArr;
}

console.log('===============>', selectionSort(items));