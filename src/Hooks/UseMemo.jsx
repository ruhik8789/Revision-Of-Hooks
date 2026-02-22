import React, { useMemo, useState } from "react";

function heavyCalculation(num) {
  console.log("heavy caculation...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

// const Child = React.memo(({ data }) => {
//   console.log("child rendered.");
// });

const Child = ({ data }) => {
  console.log("child rendered.");
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  console.log("render");
  const obj = useMemo(() => {
    return { name: "Raghav" };
  }, []);

  const result = useMemo(() => {
    return heavyCalculation(count);
  }, [count]);

  return (
    <>
      <h2>{result}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setTheme("dark")}>Theme</button>
      <Child data={obj} />
    </>
  );
};

export default UseMemo;
