//if we want to add values dynamically to object always use []

const fnamekey = "fname";
const fnamevalue = "sai";

const obj = {
  [fnamekey]: fnamevalue,
  name: "harshitha",
  age: 24,
  "will get job": true,
};
delete obj["will get job"];
//console.log(obj["fname"]);
//if we want to add something with spaces ,always give double quotes
// console.log(obj["will get job"]);

//looping
// for (let key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

//duplicate keys
// const newobj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(newobj.a);
//last value will get replaced

//create a function that multiplies numeric values in object with 2
const nums = {
  a: 100,
  b: 200,
  c: "three",
};

const multiplybytwo = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  return obj;
};
const fin = multiplybytwo(nums);
console.log(fin);

//what is json.stringify and json.parse
const user = {
  name: "hars",
  age: 25,
};
console.log(JSON.stringify(user));
//will convert to string
//to store objects in the localstorage
const strobj = JSON.stringify(user);
// localStorage.setItem("test", strobj);
// console.log(JSON.parse(localStorage.getItem("test")));
console.log(JSON.parse(strobj));
//will convert to json

//spreadoperator
const spread = [..."harshitha"];
console.log(spread);

//stringify certain proerties
const settings = {
  username: "harshi",
  level: 11,
  age: 25,
};

console.log(JSON.stringify(settings, ["username", "level"]));

//this inside objects --refer to this.js

//destructuring
let userdet = {
  name: "sai harshitha",
  age: 25,
  fullname: {
    fname: "harshitha",
    lname: "sai",
  },
};

const {
  name: myname,
  fullname: { fname },
} = userdet;
console.log(myname, fname);

//rest parameters should always be at las when passed to function

//object referencing
let c = { greeting: "hey" };
let d;
d = c;
c.greeting = "hello";
console.log(d.greeting);

//reassigning will not affect the reference

//what is shallow copy and deep copy
//shallow copy is when we copy one object to other object ,it has reference to the parent still

//deep copy we clone the object ,hence there is no reference to parent

const deep = {
  uname: "sai harshitha",
  age: 25,
};

//using assing
const deepclone = Object.assign({}, deep);
deepclone.uname = "hays";
console.log(deepclone);
console.log(deep);
//using stringify and parse
const deepcloneparse = JSON.parse(JSON.stringify(deepclone));
//using destructuring
const deepdestruct = { ...deep };

// Shallow Copy:
// A shallow copy creates a new object and copies the top-level structure of the original object.
// If the original object contains nested objects or arrays, the shallow copy only creates copies of the references to those nested objects or arrays, not the actual nested objects or arrays themselves.
// As a result, modifying a nested object or array in the copy will affect the original object and vice versa.
// Shallow copies are efficient for copying simple objects but may not be suitable if you need to ensure that changes to nested objects do not affect the original object.
// Deep Copy:
// A deep copy creates a completely new object and recursively copies all nested objects and arrays within the original object.
// Each nested object or array is also copied recursively, creating a separate copy in memory.
// As a result, modifying a nested object or array in the copy does not affect the original object, and vice versa.
// Deep copies ensure that the copied object is completely independent of the original object, making them suitable for scenarios where you need to make changes to the copied object without affecting the original.

//implicit binding and explicit binding
//implicit binding -we call function of obj using dot notation
//explicit binding -using call ,apply and bind
