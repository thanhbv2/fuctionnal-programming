const f = x => x + 2;
const g = x => x * 3


console.log('===============>', f(g(5)));

const scream = str => str.toUpperCase();
const exclaim = str => `${str}`;
const repeat = str => `${str} ${str}`;

console.log('===============>',
  scream(
    exclaim(
      repeat('I love high order funcition')
    )
  )
);

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)


const withCompose = compose(
  repeat,
  exclaim,
  scream
)

console.log('===============>', withCompose('I love you'));

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x)

const withPipe = pipe(
  scream,
  exclaim,
  repeat
)

console.log('===============>', withPipe('I love Js'));

module.exports = {
  scream,
  exclaim,
  repeat,
  compose
}