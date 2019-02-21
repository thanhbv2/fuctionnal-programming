const greet = (hasClient) => {
  return (hasClient || doNothing()) && sayHello();
}

function doNothing() {
  return
}

function sayHello() {
  console.log('===============> hello', );
}


// greet(true)
greet(false)