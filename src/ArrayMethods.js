const array = [
  { name: "fan", price: 100 },
  { name: "light", price: 200 },
  { name: "car", price: 300 },
  { name: "phone", price: 400 },
  { name: "pen", price: 500 },
  { name: "bottle", price: 600 },
  { name: "cap", price: 700 },
];

//filter
const filterarray = array.filter((item) => item.price > 100);
console.log(filterarray);

//map
//will return a new array
const maparray = array.map((item) => item.name);
console.log(maparray);

//foreach
//will not return any array ,same like for
array.forEach((item) => console.log(item.name));

//some
//will return if atleast one item is less than 200
let somearray = array.some((item) => item.price < 200);
console.log(somearray);

//every
//will return if all the items are greater than 200
let everyarray = array.every((item) => item.price > 100);
console.log(everyarray);

//reduce
let reducearray = array.reduce((sum, item) => {
  return (sum = sum + item.price);
}, 0);
console.log(reducearray);

//find
//it will return the first object
let findarray = array.find((item) => {
  return item.price > 200;
});
console.log(findarray);

let names = ["sai", "harshitha", "reddy"];
let namesplice = ["sai", "harshitha", "reddy"];
let names1 = ["veeram"];
//tostring
let tostringarray = names.toString();
console.log(tostringarray);

//join
let joinarray = names.join("  ");
console.log(joinarray);

//concat
let concatarray = names.concat(names1);
console.log(concatarray);

//splice
//array.splice(startIndex, deleteCount, item1, item2, ...)
//it is better to maintain a copy of array for splicing as it is going to manipulate on the original array
const spliced = namesplice.splice(1, 1, "sree", "ram");
console.log(spliced);
console.log(namesplice);

//slice
//array.slice(startIndex, endIndex)
//slice doesnt mutate the original array
//we cannot add elements to the array using slice
const sliced = names.slice(1, 2);
console.log(sliced);

//indexOf
let index = names.indexOf("sai");
console.log(index);

//flat
//we can specify number inside flat method to flat nested arrays
let nums = [1, 2, 3, 4, [5, 6], 7];
let flatarray = nums.flat();
console.log(flatarray);

//push
flatarray.push(8);
console.log(flatarray);
//pop
flatarray.pop();
console.log(flatarray);
//shift
flatarray.unshift(0);
console.log(flatarray);
//unshift
let shifted = flatarray.shift();
console.log(flatarray);
console.log(shifted);

//sort
array.sort((a, b) => a - b);
