import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  // type 1 of useEffec on the basis of execution
  // useEffect(() => {
  //   console.log("Hello World");
  // }, [])

  //type 2 of useEffec on the basis of execution
  // useEffect(() => {
  //   console.log("triggered")
  // }, [count, count1])

  //type 3 of useEffec on the basis of execution
  useEffect(()=>{
    console.log("UseEffect triggered")
  })


  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      
      <h1>Count1: {count1}</h1>
      <button onClick={() => setCount1(count1 - 1)}>Increase</button>
    </div>
  )
}

export default UseEffect
