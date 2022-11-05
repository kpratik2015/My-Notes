Array.prototype.myMap = function(fn) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        arr.push(fn(this[i], i, this))
    }
    return arr;
}

[1,2].myMap(el => el * 2);