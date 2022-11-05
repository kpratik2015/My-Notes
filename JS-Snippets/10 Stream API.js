/**
Input:
const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);

Output:
2
4
6
*/

const Stream = function() {
    this.callbacks = [];
    this.subscribe = (cb) => {
        this.callbacks.push(cb);
    } 
    this.push = (val) => {
        this.callbacks.forEach(cb => {
            cb.call(this, val);
        })
    }
}

const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);