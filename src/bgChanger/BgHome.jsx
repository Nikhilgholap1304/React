import React, { useEffect, useState } from "react";

const BgHome = () => {
  const [color, setColor] = useState(localStorage.getItem("color") || "purple");

  useEffect(() => {
    localStorage.setItem("color", color);
  }, [color]);

  // const changeColor = (color) => {
  //   //event handler
  //   setColor(color);
  // }; //well we could have done like this also but serColor is also a function so why not put setColor insode the callback
  
  return (
    <div className={`h-screen w-screen bg-${color}-500 flex`}>
      {/* or style = {{backgroundColor: color}} */}
      <ul className="w-fit bg-white flex gap-3 rounded-sm mx-auto mt-auto mb-[2rem] shadow-xl px-2 py-2">
        <li
          className="px-[1rem] py-[0.5rem] bg-yellow-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </li>
        {/* onClick={setColor()} you get an error bcuz onclick only takes function reference not the calling statement/return value cuz onClick's value gets called internally anyway and hence we need to use the callback function as a value and then inside we can pass the arguments to our aimed function (event handler) */}
        <li
          className="px-[1rem] py-[0.5rem] bg-purple-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("purple")}
        >
          Purple
        </li>
        <li
          className="px-[1rem] py-[0.5rem] bg-red-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("red")}
        >
          Red
        </li>
        <li
          className="px-[1rem] py-[0.5rem] bg-green-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("green")}
        >
          Green
        </li>
        <li
          className="px-[1rem] py-[0.5rem] bg-blue-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("blue")}
        >
          Blue
        </li>
        <li
          className="px-[1rem] py-[0.5rem] bg-pink-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("pink")}
        >
          Pink
        </li>
        <li
          className="px-[1rem] py-[0.5rem] bg-orange-500 rounded-sm shadow-sm cursor-pointer hover:-translate-y-4 hover:contrast-150 transition-all active:bg-gray-700"
          onClick={() => setColor("orange")}
        >
          Orange
        </li>
      </ul>
    </div>
  );
};

export default BgHome;
