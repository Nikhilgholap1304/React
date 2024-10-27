import React, { useCallback, useState } from "react";

const PGApp = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_+={}[]|;:'<,>.`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
    }

    setPassword(pass);
    
  }, [length, numberAllowed, charAllowed, setPassword]);
  //const cachedFn = useCallback(callback(fn), dependency)

  return (
    <>
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2">
        <h1 className="font-semibold text-2xl">Password Generator</h1>
      </div>
    </>
  );
};

export default PGApp;
