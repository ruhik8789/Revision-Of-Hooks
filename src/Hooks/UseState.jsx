import React, { useState } from "react";

const UseStatee = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(prev => prev + 1)}>Increment</button>

    <h1>Name: {name}</h1>
    <input type="text" onChange={(e) => setName(e.target.value)} />
  </>
  )};

export default UseStatee;
