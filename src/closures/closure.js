function x() {
  let a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();

function a() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
}
a();
//a function bind together along with its lexical scope
//the function along with the reference to those variables
//uses of closures
//module design patterns
//currying
//memoise
//maintain state in async world
//settimeouts
//iterators
