// Curring

const add1 = function (x) {
  return function (y) {
    return x + y
  }
}

const add = x => y => x + y

console.log('===============>', add(2)(4));
console.log('===============>', add1(2)(4));