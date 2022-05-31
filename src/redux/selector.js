import { createSelector } from 'reselect';

// export const todoLisSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });

//   return todoRemaining;
// };

export const searchTextSelector = (state) => state.filters.search;
export const todoLisSelector = (state) => state.todoList;
export const todoRemainingSelector = createSelector(
  todoLisSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    });
  }
);
