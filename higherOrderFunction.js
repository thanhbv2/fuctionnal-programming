


let list = [1, 2, 4, 51, 32, 34, 556, 224]

// const getItem = by => arr => by;

const getItem = (by) => {
  return (arr) => {
    return by(arr)
  }
}

const maxNumber = (arr) => {
  return Math.max(...arr);
};


const getMaxItem = getItem(maxNumber)(list);

console.log(getMaxItem);


const members = [
  {
    name: 'Alice',
    height: 165,
  },
  {
    name: 'Bob',
    height: 152,
  },
  {
    name: 'Celina',
    height: 178,
  },
  {
    name: 'Dan',
    height: 194,
  },
  {
    name: 'Eric',
    height: 187,
  },
];


const maxHeight = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev.height > curr.height ? prev : curr
  })
}

const getMaxPerson = getItem(maxHeight)(members)

console.log('===============>', getMaxPerson);

const curry = (fn) => {
  let totalArguments = fn.length;
  let next = (argumentLength, rest) => {
    if (argumentLength > 0) {
      return (...args) => {
        return next(
          argumentLength - args.length,
          [
            ...rest,
            ...args,
          ]
        );
      };
    }
    return fn(...rest);
  };
  return next(totalArguments, []);
};

const sum = (a, b, c) => {
  return a + b + c;
};

const sum = (a, b) => {
  return a + b;
}
const curriedSum = curry(sum);

console.log('===============>', sum(1, 2));
console.log('===============>', curriedSum(4, 4));
console.log('===============>', curriedSum(3, 4, 2));
console.log('===============>', curriedSum(4, 4, 2));