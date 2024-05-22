const p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 3) {
    resolve("success");
  } else {
    reject("failure");
  }
});

p.then((msg) => console.log(msg)).catch((err) => console.log(err));

//using callback
let success = true;
let failure = false;
const callback = (successfunc, errfunc) => {
  if (success) {
    successfunc({ hello: "hello", success: "success" });
  }
  if (failure) {
    errfunc("failure");
  }
};
callback(
  (msg) => console.log(msg.hello, msg.success),
  (err) => console.log(err)
);

//using promises
const prom = new Promise((resolve, reject) => {
  if (success) {
    resolve({ hello: "hello", success: "success" });
  }
  if (failure) {
    reject("failure");
  }
});

prom
  .then((msg) => console.log(msg.hello, msg.success))
  .catch((err) => console.log(err));

//promises.all
const record1 = new Promise((resolve, reject) => {
  resolve("record1");
});
const record2 = new Promise((resolve, reject) => {
  resolve("record2");
});

const record3 = new Promise((resolve, reject) => {
  resolve("record3");
});

Promise.all([record1, record2, record3]).then((messege) =>
  console.log(messege)
);
//promise.all will run all the promises parllely

//promise.race
const record4 = new Promise((resolve, reject) => {
  resolve("record1");
});
const record5 = new Promise((resolve, reject) => {
  let count = 1;
  if (count === 3) {
    resolve("record2");
  } else {
    reject("reject");
  }
});

const record6 = new Promise((resolve, reject) => {
  resolve("record3");
});

Promise.all([record4, record5, record6])
  .then((messege) => console.log(messege))
  .catch((err) => console.log(err));

//promise.race will return the first finished promise
