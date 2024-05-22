function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(2, 3));

//pure functions are those which produces the same output with the same input which accounts for reliability and makes it easy for
//testing and maintainability

//pure functions does not modify variables outside of its scope,it only modifies the parameters being passed to the function
//doesnt mutate its arguments
//pure functions does not perform any side effects ,they only compute value based on provided inputs

//console.log -- not a pure function as it returns different output for input
