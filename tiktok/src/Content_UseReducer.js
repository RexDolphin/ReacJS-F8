import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import {nanoid} from 'nanoid';

// so sánh useState và useReducer

/**
 * -------useState-------
 * 1. Init State: 0 (khởi tạo giá trị initState)
 * 2. Actions: (logic thực hiện 1 hành động nào đó) ex: Up (state + 1), Down (state - 1)
 * 
 * -------useReducer-------
 * 1. Init State: 0 (khởi tạo giá trị initState)
 * 2. Actions: (logic thực hiện 1 hành động nào đó) ex: Up (state + 1), Down (state - 1)
 * 3. Reducer
 * 4. Dispatch
 */

// Init State
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// Reducer
const reducer = (state, action) => {
  switch(action){
    case 'up':
      return state + 1;
    case 'down':
      return state - 1;
    default: 
    throw new Error('Invalid action');
  }
}
function Content_UseReducer(){
  const [count, dispatch] = useReducer(reducer, initState);
  // const [count, setCount] = useState(0);
  document.title = 'Content_UseReducer';

  return(
    <div> 
      <h1>Content_UseReducer</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </div>
  )
}

export default Content_UseReducer;