function counter() {
  for (let i = 0; i < 10; i++) {
    console.log('===============>', i);
  }

}


function recursionCounter(n) {
  console.log('===============>', n);
  if (n === 9) return
  return recursionCounter(n + 1)
}

counter();
console.log('=======dbc========>', );
recursionCounter(0);


const items = [[1, 2, 3], [2, 32, 6]]

function isCheckNumber(num, arr) {
  let isvalid = false;
  arr.forEach(item => {
    if (Array.isArray(item) && item.length > 0) {
      item.forEach(i => {
        if (i === num) {
          isvalid = true;
        }
      })
    }
  })
  return isvalid;
}


function isCheckRecur(arr) {
  let isvalid = 'no';
  arr.forEach(item => {
    if (item === 7) {
      isvalid = 'test';
    }

    if (Array.isArray(item)) {
      isvalid = isCheckRecur(item)
    }


  })

  return isvalid;

}

console.log('===============>sssss', isCheckRecur(items));

console.log('===============>', isCheckNumber(6, items));

function sum(arr) {
  let total = 0;
  for (let i of arr) {
    total += i;
  }
  return total;
}

function sum1(arr) {
  let total = 0;
  if (arr.length === 0) return 0;
  return total = arr[0] + sum1(arr.slice(1))
}

console.log('===============>su', sum([1, 2, 3, 4, 5]));
console.log('===============>sss', sum1([1, 2, 3, 4, 5]));

