//implementing memoisation in javascript
//memoisation is a technique that can be used to reduce time consuming calculations by saving previous input to something called cache and return the result from it

const add = (n) => {
  let sum = 0; // Declare sum inside the add function
  for (let i = 0; i < n; i++) {
    sum = sum + i;
  }
  return sum;
};

const memoise = (func) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log(cache);
      console.log("cache", cache[n]);
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};
console.time();
let finalfunc = memoise(add);
console.log(finalfunc(5));
console.timeEnd();

console.time();
console.log(finalfunc(5));
console.timeEnd();
