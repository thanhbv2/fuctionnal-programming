const map1 = array => cb => arr.map(cb)
const map = cb => arr => arr.map(cb)

const arr = [1, 2, 3, 4, 5];
const double = x => x * 2;

const withMap = map1(arr)

console.log('===============>', withMap(double));
console.log('===============>', withMap((x => x * 3)));

const prop = key => obj => obj[key];

const propName = prop('name')

const people = [
  { name: 'thanh' },
  { name: 'test' },
  { name: 'teee' },
  { name: 'thfdsafh' },
]

console.log('===============>', map(propName)(people));