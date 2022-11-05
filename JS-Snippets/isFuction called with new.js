function A() {
    if ( (this instanceof arguments.callee) ) {
      console.log("OK, new");
    } else {
      console.log("OK, function");
    }
}
// ES6:
function A(B) {
    if( new.target ) {
        console.log('OK, new');
    } else {
        console.log('OK, function');
    }
}