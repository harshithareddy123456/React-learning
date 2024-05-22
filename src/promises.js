import React from "react";
import { useState, useEffect } from "react";
export default function Promises() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const res = await response.json();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);
  return (
    <div>
      <h1>harshitha</h1>
    </div>
  );
}

//promise object will act as a placeholder until it fetches real value
