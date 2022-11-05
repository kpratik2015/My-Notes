const myIsArray = (obj) => Object.prototype.toString.call(obj) === '[object Array]'

console.log(myIsArray([]))
console.log(myIsArray({}))