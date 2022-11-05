const Store = function() {
    this.container = {};
    this.get = (key) => this.container?.[key];
    this.set = (key, val) => {
        this.container[key] = val;
        return this;
    };
    this.has = (key) => !!this.container?.[key];
}

const store = new Store();
store.set('a', 10);
store.set('b', 20);
store.set('c', 30);
console.log(store.get('b'));
console.log(store.has('c'));
console.log(store.get('d'));
console.log(store.has('e'));