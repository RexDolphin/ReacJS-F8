import React, { useEffect, useState, useCallback } from "react";
import Content_Memo_UseCallback_Child from './Content_Memo_UseCallback_Child'

function Content_Memo_UseCallback(){

  const [count, setCount] = useState(0);
  

  const handleIncrease = useCallback(() => {
    setCount(prev => prev + 1);
  }, [])
  return(
    <React.Fragment>
      <Content_Memo_UseCallback_Child onIncrease={handleIncrease}/>
      <h1>Content_Memo_UseCallback</h1>
      <h1>{count}</h1>
    </React.Fragment>
  )
}

export default Content_Memo_UseCallback;