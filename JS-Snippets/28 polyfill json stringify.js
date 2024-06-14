console.log(JSON.stringify([{ x: 5, y: 6 }]));
// expected output: "[{"x":5,"y":6}]"


class JSON {

  static stringify(obj) {
    // if value is not an actual object, but it is undefined or an array
    // stringifiy it directly based on the type of value
    if (typeof obj !== 'object' || obj === undefined || obj instanceof Array) {
      return this.value(obj);
    }
    // if value is null return null
    else if (obj === null) {
      return `null`;
    }

    // traverse the object and stringify at each level
    let objString = Object.keys(obj).map((k) => {
      return (typeof obj[k] === 'function') ? null :
        `"${k}": ${this.value(obj[k])}`;
    });

    // return the stringified output
    return `{${objString}}`;
  }

  // helper method
  // handle all the value types
  // and stringify accordingly
  static value(val) {
    switch (typeof val) {
      case 'boolean':
      case 'number':
        // if the value is finite number return the number as it is 
        // else return null
        return isFinite(val) ? `${val}` : `null`;
      case 'string':
        return `"${val}"`;
      // return null for anything else
      case 'function':
      case 'symbol':
      case 'undefined':
        return 'null';
      // for object, check again to determine the object's actual type
      case 'object':
        // if the value is date, convert date to string
        if (val instanceof Date) {
          return `"${val.toISOString()}"`;
        }
        // if value is a string generated as constructor, // new String(value)
        else if (val.constructor === String) {
          return `"${val}"`;
        }
        // if value is a number or boolean generated as constructor, // new String(value), new Boolean(true)
        else if (val.constructor === Number || val.constructor === Boolean) {
          return isFinite(val) ? `${val}` : `null`;
        }
        // if value is a array, return key values as string inside [] brackets
        else if (Array.isArray(val)) {
          return `[${val.map(value => this.value(value)).join(',')}]`;
        }

        // recursively stingify nested values
        return this.stringify(val);
    }
  }
};