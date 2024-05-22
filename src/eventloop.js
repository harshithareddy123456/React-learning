//everything in javascript is synchronous and single threaded ,that means it will perform one operation at a time
//it has call stack in js engine which will perform one operation at a time
//when ever we call piece of code "global execution context is create" which will
//go into call stack
//in gec whole code will run line line
//for each function gec is create and when function execution is done it will be remove from the call stack
//browser---JS engine --- call stack --- our program (GEC)
//browser has local storage
//have timer in browser,have access to db,geo location and send requests through http
//and all of these super powers should be able to be accessible to GEC in call stack
//to access all those ,we need web apis
//settimeout is not part of js,even fetch ,localstorage,document.(),console.log()
//webapis
//1.settimeout()
//2.DOM APIS
//3.fetch()
//4.localstorage
//5.console
//6.location

//browser gives all these super powers to js by using window keyword
//as window is global object we need not use window keyword ,directly we can use settimeout

console.log("start");
setTimeout(function cb() {
  console.log("callback");
}, 4000);

console.log("end");
//here when the code execution comes into settimeout line settimeout will be registered in callback queue
//and the job of event loop is to check if there is anything to push to call stack and after 4 secs cd will be pushed from callback queue to call stack through event loop
//the use of event loop is to monitor callback queue and call stack
//there will be microstack queue which will be given first priority
//all the functions which will come from promises and mutation obserever will go inside microtask queue
