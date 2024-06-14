const removeCycle = (obj) => {
    //set store
    const set = new WeakSet([obj]);
    
    //recursively detects and deletes the object references
    (function iterateObj(obj) {
        for (let key in obj) {
            // if the key is not present in prototye chain
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object'){
                    // if the set has object reference
                    // then delete it
                    if (set.has(obj[key])){ 
                      delete obj[key];
                    }
                    else {
                      //store the object reference
                        set.add(obj[key]);
                      //recursively iterate the next objects
                        iterateObj(obj[key]);
                    }
                }
            }
        }
    })(obj);
}

/** Input */
const List = function(val){
  this.next = null;
  this.val = val;
};

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

const removeCyclev2 = (startNode) => {
    const ws = new WeakSet();
    let curr = startNode;
    while(curr.next) {
        if(ws.has(curr.next)) {
            curr.next = null;
            break;
        } else {
            ws.add(curr);
            curr = curr.next;
        }
    }
}

removeCycle(item1);
console.log(item3);