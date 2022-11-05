const myInstanceof = (obj, target) => {
    if(obj === null || typeof target !== 'object') {
        return false;
    }

    while(obj) {
        if(obj.__proto__ === target.prototype) return true;
        obj = obj.__proto__;
    }
    
    return false;
}