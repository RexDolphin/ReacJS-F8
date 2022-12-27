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
const initState = { // multiple state thì phải dùng object
  job: '',
  jobs: []
}; 

// Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

// function setJob
const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
// function addJob
const addJob = payload => {
  console.log(payload)
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  console.log("payload delete: ", payload)
  return {
    type: DELETE_JOB,
    payload
  }
}

// Reducer
const reducer = (state, action) => {
  // reducer fai trả về đúng format initState
  console.log("Action: ", action);
  console.log("Prev State: ", state)
  let newState = {};
  switch(action.type){
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break;
    case ADD_JOB:
      // console.log("state add job: ", state);
      // console.log("action add job: ", action);
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break;
    case DELETE_JOB:
      console.log("state delete job: ", state);
      console.log("action delete job: ", action);
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload,1);
      console.log(newJobs)
      newState = {
        ...state,
        jobs: newJobs
      }
      break;
    default:
      throw new Error('Invalid action')
  }
  console.log("newState: ", newState);
  return newState;
  
}
function Content_UseReducer_ToDoApp(){
  const jobRef = useRef();
  const [state, dispatch] = useReducer(reducer, initState);
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