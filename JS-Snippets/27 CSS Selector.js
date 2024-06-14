/**
Input:
<div id="main">
  <article>Hello World</article>
  <section>
    <p>
      <span>
        What is the purpose of life?
        <button>Learn more</button>
        <button id="target">Really?</button>
      </span>
    </p>
  </section>
</div>

Output:
"div[id='main'] > section:nth-child(2) > p:nth-child(1) > span:nth-child(1) > button:nth-child(2)"
*/















function makeSelector(root, target) {
  let result = [];

  while (target !== root) {
    const position = [...target.parentNode.children].indexOf(target) + 1;
    result.unshift(`${target.tagName.toLowerCase()}:nth-child(${position})`);
    target = target.parentNode;
  }

  result.unshift(`${root.tagName.toLowerCase()}[id='${root.id}']`)

  return result.join(' > ');
}