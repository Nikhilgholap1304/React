import React, { useCallback, useEffect, useRef, useState } from "react";

const PGApp = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copiedMsg, setCopiedMsg] = useState(false);

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
  //const cachedFn = useCallback(callback(fn), dependencyArray)

  // passwordGenerator()
  // Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // bcuz react will not let you directly call the function openly like we do in js either you need an eventhandling to fire it or you need useEffect

  // useRef hook
  const passwordRef = useRef(null);
  // or it would be null unless we don't pass it as a value to a property named "ref" to any target
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)

  const copyPasswordToClipboard = useCallback(() => {
    // passwordRef.current.select()
    // console.log(passwordRef)
    //{current: input#password.rounded.w-full.h-full.outline-none.border-none.px-2.text-gray-800}
    // console.log(passwordRef.current)
    //<input type="text" name="password" id="password" placeholder="Password" class="rounded w-full h-full outline-none border-none px-2 text-gray-800" readonly="" value="uqoxxokm">
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    //if current is not null
    window.navigator.clipboard.writeText(password);
    setCopiedMsg(true);
    setTimeout(() => {
      setCopiedMsg(false);
    }, 3000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-orange-400 p-5 rounded-sm">
        <h1 className="font-semibold text-2xl">Password Generator</h1>
        <div className="flex gap-2 items-center h-10 my-5">
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            className="rounded w-full h-full outline-none border-none px-2 text-gray-800"
            value={password}
            readOnly
            ref={passwordRef}
            // if we don't pass any reference to not even a single target then it would consider the default value passed to the useRef Hook
            // so as soon we pass the value to ref property of a target we want to link then the passwordRef will be assigned to passwordRef.current property as a object/node/element
            // Once the component unmounts, React will set ref.current to null
          />
          <button
            className="bg-blue-600 h-full px-5 rounded hover:bg-blue-700 transition-all"
            onClick={copyPasswordToClipboard}
          >
            {copiedMsg ? "copied!" : "copy"}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="range"
            name=""
            id=""
            className="cursor-pointer"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length({length})</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="numberInput"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="cursor-pointer size-4"
          />
          <label htmlFor="numberInput" className="cursor-pointer">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="charInput"
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="cursor-pointer size-4"
          />
          <label htmlFor="charInput" className="cursor-pointer">
            Characters
          </label>
        </div>
      </div>
    </>
  );
};

export default PGApp;
