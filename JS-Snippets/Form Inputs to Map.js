/**
 * 
Input:
<form id="parent">
  <input type="text" name="a.c" value="1"/>
  <input type="text" name="a.b.d" value="2"/>
  <input type="text" name="a.b.e" value="3"/>
</form>

Output:
{
  "a": {
    "c": "1",
    "b": {
      "d": "2",
      "e": "3"
    }
  }
}
 */

const entries = [...new FormData(document.getElementById('parent')).entries()]
/**
['a.c', '1']
['a.b.d', '2']
['a.b.e', '3']
*/
let res = {};

for (const [key, value] of entries) {
  let levels = key.split('.');
  let temp = res;
  let root = temp;
  while (levels.length) {
    if (levels.length === 1) {
      temp[levels[0]] = value;
    } else {
      temp[levels[0]] = levels[0] in temp ? temp[levels[0]] : {};
      temp = temp[levels[0]]
    }
    levels = levels.slice(1);
  }
  res = root;
}

console.log('result ', res);

