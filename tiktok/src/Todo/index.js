import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import {nanoid} from 'nanoid';
import reducer, {initState} from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

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

function Content_UseReducer_ToDoApp(){
  const jobRef = useRef();
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const {job, jobs} = state;

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
    jobRef.current.focus();
  } 

  const handleDelete = (index) => {
    console.log(index)
    dispatch(deleteJob(index))
  }

  document.title = 'Content_UseReducer_ToDoApp';

  return(
    <div> 
      <h1>Content_UseReducer_ToDoApp</h1>
      <input 
      ref={jobRef}
        value={job}
        type="text"
        placeholder="Enter job..." 
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}/>
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {
            jobs && jobs.length > 0 && jobs.map((item, index) => (
              <li key={index}>
                {item} &nbsp;
                <span onClick={() => handleDelete(index)}>
                  &times;
                </span>
              </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Content_UseReducer_ToDoApp;