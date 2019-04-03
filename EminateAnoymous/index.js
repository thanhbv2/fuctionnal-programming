const arr = [1, 2, 3]

arr.map(x => x * 2)

// should so that remove anoymous function
const double = x => x * 2

let nArr = arr.map(double);

console.log('===============>', nArr);