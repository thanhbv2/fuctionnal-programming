// Mutable can be change after creation (Kiểu biến refernce cùng trỏ đến 1 vùng nhớ)

const a = [1, 2, 3]
const b = a

const obj = { foo: 'bar' }
const obj1 = obj;



console.log('===============>before', a === b);
b.push(4);
console.log('===============>updated', a);

obj1.foo = 'test'
console.log('===============>updated', obj);


// Immutable

const a = [1, 2, 3];

const add = (value) => arr => {
  const clone = [...arr];
  clone.push(value);
  return clone;
}

const b = add(4)(a)

console.log('===============>not updated:', a === b);