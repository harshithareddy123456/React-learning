import React, { useEffect, useState } from "react";

const SetInterval = () => {
  const [value, setvalue] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      if (value < 5) {
        setvalue((value) => value + 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <>
      <div>{value}</div>
    </>
  );
};

export default SetInterval;
