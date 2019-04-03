// Pure function


//Ex1 - Global state
const COST_OF_PRO = 19

const getPrice = pro => pro * COST_OF_PRO

console.log('===============>', getPrice(2));
console.log('===============>', getPrice(2));


// Ex2 - Same input, diffrence output

const generateId = () => Math.floor(Math.random() * 10000)

const createUser = () => ({
  id: generateId(),
  username: 'test1',
  pass: 'test2'
})

console.log('===============>', createUser());
console.log('===============>', createUser());
console.log('===============>', createUser());


// Ex3 - Side effect #1
let id = 0;
let createFoodItem = name => ({
  id: ++id,
  name
})

console.log('===============>', createFoodItem('Tea'));
console.log('===============>', createFoodItem('Milk'));
console.log('===============>', createFoodItem('Food'));
console.log('===============>', id);


//Ex4 - Side effect #2 - outside world

const logger = msg => console.log('===============>', msg);

logger('hi thanh')