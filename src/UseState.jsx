import React from 'react'
import {useState} from "react"

const UseState = () => {
  const[initial, setValue] = useState(0)

  return (
    <div>
      <h1>This is useState Page..</h1>
     <h1>{initial}</h1>
     <button onClick={()=>setValue(initial+1)}>Add</button> 
    </div>
  )
}

export default UseState
