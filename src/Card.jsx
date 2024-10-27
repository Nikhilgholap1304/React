import React from 'react'

const Card = ({name = "Me", objVal}) => { 
  // you get props in the form of object
  // while destructuring you can also pass the default value to a key if its not present or is undefined 
  // console.log(props) //{} if nothing passed
  // console.log(props.name) //for shortcut we directly use object dstructuring and get the prop/key from an object
  console.log(name, objVal)
  return (
    <div className='h-[17rem] w-[12rem] bg-purple-600 rounded-md flex shadow-lg'>
      {/* <h1 className='m-auto font-semibold text-xl'>Card of {name || "Me"}</h1> */}
      <h1 className='m-auto font-semibold text-xl'>Card of {name}</h1>
    </div>
  )
}

export default Card
