console.log(Math.floor(3.14));
console.log(Math.ceil(3.14));
function randomno(a, b) {
  return Math.floor(Math.random() * (a - b + 1)) + b;
}

console.log(randomno(10, 1));
