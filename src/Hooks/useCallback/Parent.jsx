import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
};

export default Parent;
