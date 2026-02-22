import React from "react";
import { useCounter } from "./useCounter";

const Counterr = () => {
  const { count, increment } = useCounter();
  console.log(useCounter());
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => increment()}>+</button>
    </>
  );
};

export default Counterr;
