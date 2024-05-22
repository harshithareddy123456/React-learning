const obj = {
  name: "harshitha",
  place: "knl",
  run: () => {
    console.log("run");
  },
};

const p = {
  name: "tharun",
};

p.__proto__ = obj;

// console.log(p.name);
p.run();

Function.prototype.mybind = function () {
  console.log("proto");
};
function fun() {}
fun.mybind();
//fun.mybind() will log proto
//when an object or array is create ,js engine will attach inturn attach the object which will give access to the properties and methods
//arr.__proto__.concat

//arr.__proto__ and Array.prototype are same
//arr.__proto__.__proto__ and Object.prototype are same
//Object.prototype.__proto__ is null

//this will simplify why everything is object in array
//every prototype chaining will inturn become object
