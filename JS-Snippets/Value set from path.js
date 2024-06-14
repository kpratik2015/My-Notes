const object = { 'a': [{ 'b': { 'c': 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// 5


function set(obj, path, value) {


  const helper = (obj, path, value) => {
    let [current, ...rest] = path;

    // if there are more keys
    // add the value as an object or array
    // depending upon the typeof key
    if (rest.length > 0) {
      // if there is no key present
      // create a new one
      if (!obj[current]) {
        // if the key is numeric
        // add an array
        // else add an object
        const isNumber = `${+rest[0]}` === rest[0];
        obj[current] = isNumber ? [] : {};
      }

      // recurisvely update the remaining path
      // if the last path is not of object type
      // but key is then
      // create an object or array based on the key
      // and update the value
      if (typeof obj[current] !== 'object') {
        // determine if the key is string or numeric 
        const isNumber = `${+rest[0]}` === rest[0];
        obj[current] = helper(isNumber ? [] : {}, rest, value)
      }
      // else directly update value
      else {
        obj[current] = helper(obj[current], rest, value);
      }
    }
    // else directly assing the value to the key
    else {
      obj[current] = value;
    }

    // return the updated obj
    return obj;
  }

  const pathArr = typeof path === 'string' ? path.replace('[', '.').replace(']', '').split(".") : path;

  helper(obj, pathArr, value);
}