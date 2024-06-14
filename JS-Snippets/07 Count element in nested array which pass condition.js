let countInArray = function (inputArr, test) {
  //track the count
  let count = 0;

  const search = (arr, test) => {
    //iterate the array
    for (let a of arr) {
      //if not an array
      //test the element
      //if it passes the test, store its result
      if (test(a)) {
        count += 1;
      }

      //if sub-array
      if (Array.isArray(a)) {
        //recursively filter the sub-array
        search(a, test);
      }
    }
  };

  //search
  search(inputArr, test);

  //return
  return count;
};

/** ES6 */
countInArray = (arr, predicate) => {
    return arr.flat(Infinity).filter(predicate).length
}

/** Alternative */

function countInArray(arr, f) {
  let count = 0;

  function check(currArr, start, end) {
    if(start > end) {
        return;
    }
    if (currArr[start] && Array.isArray(currArr[start])) {
      check(currArr[start], 0, currArr[start].length);
    } else {
      if (f(currArr[start])) {
        count++;
      }
      check(currArr, start+1, end);
    }
  }

  check(arr, 0, arr.length);
  return count;
}

/** Test */

const arr = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }]], "bar"]];
const count = countInArray(arr, (e) => typeof e === "number");
console.log(count); // 4