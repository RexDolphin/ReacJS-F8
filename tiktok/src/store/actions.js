import { Constants } from "./constants";

export const setTodoInput = payload => {
  return {
    type: Constants.SET_TODO_INPUT,
    payload
  }
}
export const add_todo = payload => {
  return {
    type: Constants.ADD_TODO,
    payload
  }
}