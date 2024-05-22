import React, { useMemo, useState } from "react";

export default function Memouse() {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);
  const funccounterone = () => {
    setCounterone(counterone + 1);
  };
  const funccountertwo = () => {
    setCountertwo(countertwo + 1);
  };
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000000) i++;
    return counterone % 2 === 0;
  }, [counterone]);
  return (
    <div>
      <button onClick={funccounterone}>counter one : {counterone}</button>
      <div>{isEven ? "even" : "odd"}</div>
      <button onClick={funccountertwo}>counter two : {countertwo}</button>
    </div>
  );
}

//use memo will allow us to not run the unneccesary expensive functions
//when u need to cache the result use usememo otherwise when we need to cache the function we need to use usecallback

//use memo will store the value returned from the function
//use call back will store the function itself in cache
//usememo needs callback function and dependency array
