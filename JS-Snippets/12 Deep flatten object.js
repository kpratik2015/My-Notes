/**
Input:
{
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
}

Output:
{
  "A": "12"
  "B": 23,
  "C.O.L": 56,
  "C.P": 23,
  "C.Q.0": 1,
  "C.Q.1": 2,
}
*/

const deepFlatten = (obj, ancestors = [], output = {}) => {
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object') {
            deepFlatten(obj[key], [...ancestors, key], output)
        } else {
            const newKey = ancestors.length ? [...ancestors, key].join(".") : key;
            output[newKey] = obj[key];
        }
    })
    return output;
}

deepFlatten({
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
       L: 56
    },
    Q: [1, 2]
   }   
})