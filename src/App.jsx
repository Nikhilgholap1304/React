import LifeCycleClasses from "./LifeCycleClasses";
import LifeCycleFunction from "./LifeCycleFunction";
import Props from "./Props";
import InterViewQue1 from "./InterViewQue1";
import BgHome from "./bgChanger/BgHome";
import PGApp from "./passwordGenerator(useEffect,useCallback)/PGApp.jsx";
function App() {
  const username = "Nikhil";
  return (
    <>
      {" "}
      {/* fragment or syntactic sugar */}
      {/* It must only return one element, if you don't include it inside then it will throw an error as its in jsx */}
      {/* <h1>Hello world</h1> */}
      {/* <LifeCycleClasses/> */}
      {/* <LifeCycleFunction /> */}
      {/* <h1>{username}</h1> */}
      {/* <h1>{if(2>3) 'hii'}</h1>  this will not work*/}
      {/* this is an expression especially evaluated expression and to be kept in mind that only outcome or resultant thing should be included */}
      {/* <Props /> */}
      {/* <InterViewQue1/> */}
      {/* <BgHome/> */}
      <PGApp />
    </>
  );
}

export default App;
