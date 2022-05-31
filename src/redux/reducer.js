import { combineReducers } from 'redux';

import TodoReducer from "../components/TodoList/TodoSlice";
import FilterReducer from "../components/Filters/FiltersSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: FilterReducer(state.filters, action),
//     todoList: TodoReducer(state.todoList, action),
//   };
// };
const rootReducer = combineReducers({
  filters: FilterReducer,
  todoList: TodoReducer,
})

export default rootReducer;
