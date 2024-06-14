// Sum 2 to n
const sumTwo = n => {
    return n + 2;
}

// Multiply 2 to n
const multiplyTwo = n => {
    return n * 2;
}

// Example
const res = pipe(
  sumTwo,
  multiplyTwo,
)(1)

console.log(res); // 6



































function pipe(...funcs) {
  return function piped(...args) {
    return funcs.reduce(
      (result, func) => [func.call(this, ...result)],
      args
    )[0];
  };
}

// This will result in the same functionality, but the functions are applied from right to left.
function compose(...funcs) {
  return function composed(...args) {
    return funcs.reduceRight(
      (result, func) => [func.call(this, ...result)],
      args
    )[0];
  };
}
