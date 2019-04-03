const { scream, exclaim, repeat, compose } = require('./index');

const withExuberance = compose(
  repeat,
  exclaim,
  scream
)

const str = 'I love funcionnal';

console.log('===============>', withExuberance(str));


const repeatExcitedly = compose(repeat, exclaim)

console.log('===============>ssss', compose(repeatExcitedly, scream)(str));

const screamLoudy = compose(exclaim, scream);

console.log('===============>test', compose(repeat, screamLoudy)(str));