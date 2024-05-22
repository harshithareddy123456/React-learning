import React, { useEffect } from "react";

export default function Promisesthen() {
  useEffect(() => {
    const data = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((Response) => {
          return Response.json();
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    data();
  }, []);
  return (
    <div>
      <h1>promises then</h1>
    </div>
  );
}

//difference between async await and then is
//async await is used with function with asyn keyword and await is used to make the asynchronous function wait until the promise is resolved
//async await uses try catch to error handling

//.then is used until the promise is resolved and callback chaining can happen to resolve more promises
//then and catch are used for error handling

//async is clean and readable code and can be used for sequential asynchronous operations
//then is more complex and can be used for complex asynchronous operations and parllel executions
