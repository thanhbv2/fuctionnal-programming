
const fact = (n) => {
  let result = 1;
  if (n < 0) return null
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result
}

console.log('===============>', fact(5));

const recursionFact = (n) => {
  if (n == 1){
    return 1
  }

  return n * recursionFact(n - 1);
}

console.log('===============>recursion', recursionFact(5));