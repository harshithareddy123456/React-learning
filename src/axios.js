//axios is a lightweight package and is used to make http requests in any js library
//it is used to make asynchronous http requests
//axios is more user friendly and convenient API to fetch
//fetch needs more boiler plate and data handling is difficult as we have to parse the json manually
//with axios we can call all the http methods
//with fetch we have to pass request headers explicitly
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Axiofunc() {
  const [data, setData] = useState([]);
  //with promises
  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => setData(res.data));
  //   }, []);
  //with async await
  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>harshitha axios</h1>
      {data &&
        data.map((item) => {
          const { id, title, body } = item;
          return (
            <div id={id}>
              <div>{title}</div>
              <div>{body}</div>
            </div>
          );
        })}
    </div>
  );
}
