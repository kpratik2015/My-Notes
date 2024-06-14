fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.error(error);
});

// Aborted
// error



























function fetchWithTimeout(url, limit) {
  return new Promise((resolve, reject) => {
    let timerId = null;
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal }).then(d => {
      clearTimeout(timerId);
      return d.json()
    }).then((x) => resolve(x)).catch(e => reject(e));

    timerId = setTimeout(() => {
      controller.abort();
      reject('Aborted');
    }, limit);
  })
}