/** Test */

let obj = {
  name: "Jack",
};

let myFunc = function (id, city) {
  console.log(`${this.name}, ${id}, ${city}`); // id will be undefined
};

let newFunc = myFunc.myBind(obj, "a_random_id");
newFunc("New York"); // Jack, a_random_id, New York


















// Arrow

Function.prototype.myBind = function (obj, ...args) {
  // Accepting arguments passed to newFunc
  return (...newArgs) => {
    this.apply(obj, [...args, ...newArgs]);
  };
};

Function.prototype.myBind = function (obj, ...args) {
  let func = this;
  // Accepting arguments passed to newFunc
  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

