import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: "Click me to visit google"
// }
// ultimately an element gets created into this object format 

// const Func = () => {
//   return (
//     <>
//       <h3>This is an function which shall be rendered either through tag or calling it</h3>
//     </>
//   )
// }

//or using just a variable

// const eleVar = (
//   <a href="https://google.com" target='_blank'>Click me yoooo</a>
// )

// const createElementOrg = React.createElement(
//   'a',
//   {href: "https://google.com", target: "_blank"},
//   'This is the time to click me'
// )

createRoot(document.getElementById('root')).render(
  <>
    <App />

    {/* {Func()}  */}
    {/* or  */}
    {/* <Func/> */}
    {/* {eleVar}  */}
    {/* ultimately no matter what you use it must provide/return the element */}
    {/* {reactElement}  */}
    {/* it will not acccept objects made by ourselves */}
    {/* {createElementOrg} */}
  </>,
)
