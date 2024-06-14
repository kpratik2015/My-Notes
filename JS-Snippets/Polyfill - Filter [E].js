Array.prototype.myFilter = function (fn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
