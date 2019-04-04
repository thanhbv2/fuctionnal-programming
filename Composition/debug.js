const { scream, exclaim, repeat, compose } = require('./index');

const trace = msg => x => (console.log(msg, x), x);

const withExuberance = compose(
  repeat,
  trace('after'),
  exclaim,
  trace('screate'),
  scream
)

const str = 'I love funcionnal';

console.log('===============>', withExuberance(str));


