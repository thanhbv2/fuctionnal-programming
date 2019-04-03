const arr = [1, 1, 1, 1, 2, 2, 11, 11, 2, 4, 5, 5, 4, 4, 4]

function solve(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) result[arr[i]] = 1
    else result[arr[i]]++
  }

  let mMax = 0;
  let num = 0;
  let listKey = Object.keys(result)

  for(let i = 0; i < listKey.length; i ++){
    if(result[listKey[i]] > mMax){
      mMax = result[listKey[i]];
    }

    if(mMax === result[listKey[i]]){
      num = listKey[i];
    }
  }


  console.log('===============>ssss', mMax);
  console.log('===============>ssss', num);
}

function solve2(arr) {
  let count = 0
  let countMax = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    count = demSoLanXuatHien(arr[i], arr);
    if (countMax < count) {
      countMax = count;
      num = arr[i];
    }

    if(countMax == count && num < arr[i]){
      num = arr[i];
    }
  }

  console.log('===============>', countMax);
  console.log('===============>', num);
}


function demSoLanXuatHien(num, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === num) count ++;
  }

  return count;
}


solve(arr);
solve2(arr)