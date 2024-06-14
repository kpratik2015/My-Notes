/**
Write a code that iterates the arr array in such a way that it should print each number one after another with at least a 1000ms time gap
*/

const arr = [1,2,3];


























function myPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(`Printing sequence: ${num}`))
        }, 1000)
    })
}

arr.reduce((acc, curr) => {
    return new Promise((resolve) => {
        resolve(acc.then(() => myPromise(curr)))
    })
}, Promise.resolve())

// v2

const wait = (ms) => new Promise(r => setTimeout(r, ms));

arr.reduce((acc, x) => {
    return acc.then(() => wait(1000).then(() => console.log(x)))
}, Promise.resolve());


// with async support - has O(1) instead of O(n) memory overhead

const forEachSeries = async (iterable, action) => {
  for (const x of iterable) {
    await action(x)
  }
}

forEachSeries(arr, myPromise);