import { useState } from "react";

export function useCounter(initial = 0) {
    const [count, setCount] = useState(initial);
 
    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    console.log('counter hook');

    return { count, increment, decrement };
}