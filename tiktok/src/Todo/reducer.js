import CONSTANTS from "./constants";

// Init State
export const initState = { // multiple state thì phải dùng object
  job: '',
  jobs: []
}; 
// Reducer
const reducer = (state, action) => {
  // reducer fai trả về đúng format initState
  switch(action.type){
    case CONSTANTS.SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case CONSTANTS.ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case CONSTANTS.DELETE_JOB:
      let newJobs = [...state.jobs];
      newJobs.splice(action.payload,1);
      return {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Invalid action')
  }
}
export default reducer;