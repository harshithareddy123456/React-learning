function multiply(x, y) {
  return x * y;
}
//currying can be done in two way --using bind method,closures

//using bind
const function1 = multiply.bind(this);
console.log(function1(2, 3));

const function2 = multiply.bind(this, 4);
console.log(function2(4));

//using closure
function x(a) {
  return function y(b) {
    return a * b;
  };
}
const fin = x(2);
const fin1 = fin(3);
console.log(fin1);

//currying is a phenomena where function with multiple arguments is sequenced into multiple functions with each argument
//while returning the value from each function and passing other argument to the returned function until the final data is fetched
