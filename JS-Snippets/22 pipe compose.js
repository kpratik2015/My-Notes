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
