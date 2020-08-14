# Javascript Notes

## Objects

Objects are really just containers for properties, each of which has a name and a value.

```javascript
var myString = new String("foo"); // produces a String() object
console.log(myString); // logs foo { 0="f", 1="o", 2="o"}

/* define Person constructor function in order to create custom Person() objects later */
var Person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () {
    return this.gender;
  };
};
/* when the function is called with the new keyword "this" is returned instead of undefined */
```

“A constructor is nothing more than a function,” then I would reply, “You are correct—unless that function is invoked using the new keyword.” [e.g., new String('foo')] - JavaScript treats the function as special by setting the value of this for the function to the new object that is being constructed.

**Native/Built-In Object Constructors**: Number(), String(), Boolean(), Object(), Array(), Function(), Date(), RegExp(), Error()

If you create a constructor function and call it without the use of the new keyword the this value will refer to the “parent” object that contains the function.

Everything in JavaScript can act like an object -> When using literal values for string, number, and boolean, an actual complex object is never created until the value is treated as an object. e.g. `var charactersInFoo = 'foo'.length`

**Primitive Values Are Equal by Value**

```javascript
var price1 = 10;
var price2 = 10;
var price3 = new Number("10"); // a complex numeric object because new was used
var price4 = price3;
console.log(price1 === price2); // logs true
/* logs false because price3 contains a complex number object and price 1 is
a primitive value */
console.log(price1 === price3);
```

Primitive values are stored by value (does 10 === 10?), while complex values are stored by reference.

It could be said that complex objects have an unknown size in memory because complex objects can contain any value and not a specific known value. Complex objects are “referenced by value” and can contain or encapsulate other values. Objects (a.k.a. complex values) are stored by reference.

Two variables containing identical objects are not equal to each other since they do not actually point at the same object.

A complex object can have as many references as you want, and they will always refer to the same object, even as that object changes.

## Working with Objects and Properties

The delete operator can be used to completely remove properties from an object. Below, we delete the bar property from the foo object

```javascript
var foo = { bar: "bar" };
delete foo.bar;
console.log("bar" in foo); // logs false, because bar was deleted from foo
```

Delete will not delete properties that are found on the prototype chain. Deleting is the only way to actually remove a property from an object. Setting the property to undefined or null only changes the value of a property. It does not remove the property from the object.

```javascript
var myArray = [];
console.log(myArray.foo); // logs undefined
/* JS will look at Array.prototype for Array.prototype.foo, but it is not  there.
Then it will look for it at Object.prototype, but it is not there either, so undefined is returned! */
```

**All object instances have a property that is a secret link [a.k.a. __proto__] to the constructor function that created the instance.**

```javascript
var myArray = ["foo", "bar"];
console.log(myArray.join()); // join() is actually defined at Array.prototype.join
console.log(myArray.hasOwnProperty("join")); // logs false
```

**While the in operator can check for properties of an object, including properties from the prototype chain, the hasOwnProperty method can check an object for a property that is not from the prototype chain.**
