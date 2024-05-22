//this keyword works differently with strict mode and non strict mode
//"use strict";

//this in global scope
//console.log(this);
//this is global space refers to global object and javascript can run on different devices and have a javascript run time environment
//which will differ from one device to another and hence the global object
//here this is global space refers to window

//this inside a function
//in strict mode function gives undefined
//in non strict mode function gives window object
function x() {
  //this value depends on strict mode /non strict mode
  //this keyword in function is undefined but due to the this substitution it will give object only in non strict mode
  console.log(this);
}

x(); //undefined in strict mode
//window.x(); //window in strict mode
//even with strict mode if we call with wondow then it is window object

//this in strict mode -(this substitution)
//if the value of this keyword in non strict mode is undefined or null this keyword will be replaced with globalObject

//this value depends on how this is called (window)
//when function is called inside object this will refer to the object
const b = {
  a: 10,
  x: function () {
    console.log(this.a);
  },
};

b.x();
//this inside a objects method

//call apply bind methods (sharing methods)
//call apply bind will be used when you have to share methods
//ex1
const name = {
  firstname: "sai",
  lastname: "harshitha",
  fullname: function () {
    console.log(this.firstname + "" + this.lastname);
  },
};
name.fullname();
const name2 = {
  firstname: "harshitha",
  lastname: "reddy",
};
name.fullname.call(name2);
//ex2
const fname1 = {
  firstname: "sai",
  lastname: "harshitha",
};
const fname2 = {
  firstname: "harshitha",
  lastname: "reddy",
};
function fullname1(city) {
  console.log(this.firstname + "" + this.lastname + city);
}
fullname1.call(fname1, "hyd");
fullname1.call(fname2, "bnglr");
//the difference between call and apply is how pass the arguments ,in apply we send it as array
fullname1.apply(fname1, ["knl"]);
//bind will give us a copy of function binding the object and arguments
const copyfunc = fullname1.bind(fname1, "sing");
copyfunc();

//this inside arrow functions
//arrow function doesnt have their own this instead it will refer to the value of lexical scope context
const arrowfunc = {
  x: 10,
  arrwfnc: () => {
    console.log(this);
  },
};
arrowfunc.arrwfnc(); //this will again be window object

//this inside nested arrow functions
const arrowfunc1 = {
  x: 10,
  arrwfnc1: function () {
    const c = () => {
      console.log(this);
    };
    c();
  },
};
//this inside arrow function will always refer to the enclosing lexical scope
arrowfunc1.arrwfnc1(); //will return object
//this inside DOM
//if it is used inside dom ,value is reference to html element
<button onClick="alert(this)">submit</button>;

//if we write function inside a object ,it is method

//https://www.youtube.com/watch?v=rv7Q11KWmKU
