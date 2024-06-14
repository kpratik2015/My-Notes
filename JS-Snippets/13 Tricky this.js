var fullname = "John Doe";

var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
  getMyName: function () {
    return this.fullname;
  },
  getFirstName: () => {
    return this.fullname.split(" ")[0];
  },
  getLastName: (function () {
    return this.fullname.split(" ")[1];
  })(),
};




console.log(obj.prop.getFullname()); // 
console.log(obj.getFirstName()); // 
console.log(obj.getMyName()); // 
console.log(obj.getLastName); // 























console.log(obj.prop.getFullname()); // Aurelio De Rosa
console.log(obj.getFirstName()); // John
console.log(obj.getMyName()); // Colin Ihrig
console.log(obj.getLastName); // Doe
