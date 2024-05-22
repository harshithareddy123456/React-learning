//js is synchronous ,single threaded language and can perform only one task at a time
//to perform asynchronous operation we can use callback
//callback hell occurs when you have deeply nested call back functions
//making the code difficult to read and maintain
//it happens when dealing with multiple operations in sequence
import React, { useEffect } from "react";

const Callbackhrll = () => {
  const fetchapi = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) =>
        fetch(`https://dummyjson.com/products/${data.products[0].id}`)
          .then((res) => res.json())
          .then((data) => console.log(data))
      );
  };
  useEffect(() => {
    fetchapi();
  }, []);
  return <div></div>;
};

export default Callbackhrll;

//we can use async await to remove call back hell for much neater and maintainable code
