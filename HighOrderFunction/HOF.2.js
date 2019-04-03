const withCount = fn => {
  let count = 0;
  return (...args) => {
    console.log('===============>', count++);
    return fn(...args);
  }
}

const add = (x, y) => x + y;

const withAdd = withCount(add);

console.log(withAdd(1, 2))
console.log(withAdd(13, 2))
console.log(withAdd(13, 3))