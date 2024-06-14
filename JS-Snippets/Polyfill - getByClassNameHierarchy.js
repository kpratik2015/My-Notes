/**
Input:
<div class="a" id="a_1">
  <div class="b" id="b_1">
    <div class="c" id="c_1"/>
    <div class="c" id="c_2"/>
  </div>
  <div class="c" id="c_3"/>
</div>

getByClassNameHierarchy(document.getElementById('root'), "a>b>c");

Output:
[<div class="c" id="c_1"></div>, <div class="c" id="c_2"></div>]
 */




















function getByClassNameHierarchy(element, path) {
  let classes = path.split(">");

  let result = [];

  traverseDOM(element, classes, 0, result);

  return result;
}

function traverseDOM(element, classes, idx, result) {

  // breaking condition

  if (!element) {
    return;
  }

  if (idx === classes.length - 1 && element.classList.contains(classes[idx])) {
    result.push(element);
    return;
  }

  // recurse

  for (const child of element.children) {
    if (child.classList.contains(classes[idx])) {
      // on right track
      traverseDOM(child, classes, idx + 1, result);
    } else {
      // find first class in children
      traverseDOM(child, classes, 0, result);
    }
  }

}