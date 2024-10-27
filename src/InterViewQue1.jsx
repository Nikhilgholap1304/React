import React, { useState } from "react";

const InterViewQue1 = () => {
  const [counter, setCounter] = useState(15);

  //The question is what will happen if  duplicate the same setter method and will it update for 5 times
  const update = () => {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    //Its No, it will update only for one time since it will consider it as a same/compound fragment by the react fibre bcuz its doing the exact same thing

    setCounter((prev) => prev + 1); //or (prev) => { return prev+1 }
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    //the setter method also takes callback as an argument and passes the prev value as an argument to the callback... so we are getting the updated value at each consecutive step and hence directly updating it with 5
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={update}>update</button> 
      {/* we don't to call the function just pass the function reference cuz if you look at javascript whenever we use ele.onclick = fn (we do not call it) */}
    </div>
  );
};

export default InterViewQue1;
