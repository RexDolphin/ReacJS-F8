import React, { useEffect, useState, useRef } from "react";

function ContentUseRef(){

  const [count, setCount] = useState(60);
  
  // const ref = useRef(99); // demo
  // ref.current = Math.floor(Math.random() * 10);
  const timeId = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count])


  const handleStart = () => {
    timeId.current = setInterval(() => {
      // console.log("ref.current", ref.current);
      setCount(prevCount => prevCount - 1);
    }, 1000);
    console.log("Start ==>", timeId.current)
  }


  const handleStop = () => {
    clearInterval(timeId.current);
    console.log("Stop ==>", timeId.current)
  }

  console.log(count, prevCount.current);

  return(
    <React.Fragment>
      <h1>ContentUseRef</h1>
      <h1>{count}</h1>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </React.Fragment>
  )
}

export default ContentUseRef;