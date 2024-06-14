// Opposite of Promise.all() and lets first promise to resolve win
// All promise reject => AggregateError 

const any = function(promisesArr) {
    let promiseErrors = new Array(promisesArr.length);
    let counter = 0;
    return new Promise((resolve, reject) => {
        promisesArr.forEach(p => {
            p.then(resolve).catch(err => {
                promiseErrors[counter] = err;
                counter++;
                if(counter === promisesArr.length) {
                    reject(promiseErrors)
                }
            })
        })
    })
}


/** Test cases */

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, 'one');
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, 'two');
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, 'three');
});

any([test1, test2, test3]).then(function (value) {
  // first and third fails, 2nd resolves
  console.log(value);
}).catch(function (err){
  console.log(err);
});