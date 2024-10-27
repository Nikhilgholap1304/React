import React, { useEffect, useState } from "react";


const LifeCycleFunction = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
    // setCount(count+1)
  };

  // while mounting for first time
  useEffect(() => {
    console.log("Component Mounted: Component Mounted only for first time");
  }, []);

  // while updating
  useEffect(() => {
    console.log(
      "Component Updated: Component Updating.. can be for many times"
    );
  }, [count]);

  //while unmounting or when removing component from use
  useEffect(() => {
    return () => {
      console.log("Component Unmounted: Completely removed from use");
    };
  });
  //try commenting out the component from main.jsx

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default LifeCycleFunction;
