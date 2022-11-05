var foo = (function CoolModule() {
  function doSomething() {
    console.log("Something");
  }
  return {
    doSomething: doSomething,
  };
})("foo module"); // name the object you are returning as your public API
foo.doSomething(); // foo module

const Singleton = (function () {
    let instance;
 
    function createInstance() {
        const object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();