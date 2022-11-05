/**
Object created by the Object constructor inherits from the constructor's prototype. 
Additionally, it runs the constructor function as well.

On the other hand, Object.create() builds an object that inherits directly from the one passed as its first argument. 
It doesn’t have any constructor to run. 
Closure cannot be created as it follows the functional syntax.
*/

function ObjectConstructorExample() {
    this.foo = 'Object constructor foo';
}

let myObj = new ObjectConstructorExample();

let objCreate = Object.create({
    foo: 'Object create foo' // foo is not direct property. It comes as its prototype's property
})

console.log(myObj)
console.log(objCreate)

var person = Object.create({
    height: '5.7'
})

delete person.height; // won't work as height is not direct property

console.log(person.height)