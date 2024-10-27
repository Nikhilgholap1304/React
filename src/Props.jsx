import React from "react";
import Card from "./Card";

const Props = () => {
  let objVal = { age: 17, skill: "adaptability" };
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <h1 className="text-4xl font-bold">This is Tailwind</h1>
      <Card name="Nikhil" objVal={{ age: 20, skill: "communication" }} />
      <Card name="Ayush" objVal={objVal} />
      {/* <Card name=[1,2,3]/> Error */}
      {/* <Card name={1,2,3}/> Error */}
      {} {/* You can use the variables in enclosed with curly braces in JSX */}
      <Card name="Gojo" objVal={{age: 15, skill: "logical thinking"}}/>
      <Card/>
    </div>
  );
};

export default Props;
