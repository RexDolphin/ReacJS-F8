import CONSTANTS from './constants'

// function setJob
export const setJob = payload => {
  return {
    type: CONSTANTS.SET_JOB,
    payload
  }
}
// function addJob
export const addJob = payload => {
  console.log(payload)
  return {
    type: CONSTANTS.ADD_JOB,
    payload
  }
}
export const deleteJob = payload => {
  console.log("payload delete: ", payload)
  return {
    type: CONSTANTS.DELETE_JOB,
    payload
  }
}