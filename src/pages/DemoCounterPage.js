// Whole file detail process is "section 17"

//import { useState, useEffect } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

// function useCounter(initialCount) {
//   const [count, setCount] = useState(initialCount);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return {
//     count,
//     increment,
//   };
// }

function DemoCounterPage({ initialCount }) {
  // Turning "count", "useEffect" and "handleClick" into a custom hook
  // General strategy (101 level) :
  // 1) Find code in a component related to a single piece of state
  // 2) Copy paste it all into a helper function
  // 3) Fix all the broken references

  //   const [count, setCount] = useState(initialCount);

  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };

  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default DemoCounterPage;
