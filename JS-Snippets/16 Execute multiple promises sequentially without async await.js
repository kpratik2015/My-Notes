/**
Write a code that iterates the arr array in such a way that it should print each number one after another with at least a 1000ms time gap
*/

const arr = [1,2,3];

function myPromise(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Printing sequence: ${num}`)
        }, 1000)
    })
}

arr.reduce((acc, curr) => {
    return new Promise((resolve) => {
        resolve(acc.then(() => myPromise(curr)))
    })
}, Promise.resolve())