Promise.prototype.myFinally = function(fn) {
    if(typeof fn !== 'function') {
        return this.then(fn, fn);
    }
    // get the current promise or a new one
    const P = this.constructor || Promise;

    // return the promise and call the callback function
    // as soon as the promise is rejected or resolved with its value
    return this.then(
        value => P.resolve(fn()).then(() => val),
        err => P.resolve(fn()).then(() => { throw err; })
    )
}