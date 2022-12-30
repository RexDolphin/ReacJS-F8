
import { Constants } from "./constants";
const initState = {
  todos: [],
  todoInput: ''
};
function reducer (state, action){
  switch (action.type) {
    case Constants.SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }
    case Constants.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      throw new Error('Invalid action');
  }
}
export {initState};
export default reducer;