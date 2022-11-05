const MY_TIMERS = {
    timerIds: [],
    setInterval: function(...args) {
        const id = setInterval(...args);
        this.timerIds.push(id);
    },
    clearAllInterval: function() {
        this.timerIds.forEach(id => {
            clearInterval(id);
            console.log('cleared ', id);
        })
      this.timerIds = [];
    }
}

MY_TIMERS.setInterval(() => {
  console.log("Hello");
}, 2000);

MY_TIMERS.setInterval(() => {
  console.log("Hello2");
}, 500);

MY_TIMERS.clearAllInterval();

MY_TIMERS.setInterval(() => {
  console.log("Hello3");
}, 1000);
