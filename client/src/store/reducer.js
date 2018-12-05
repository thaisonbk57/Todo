import * as actionTypes from "./actions";

const initState = {
  todos: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_TODOS:
      return {
        todos: [...action.todos]
      };

    case actionTypes.ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      };

    case actionTypes.DELETE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo._id !== action.todoId;
        })
      };

    default:
      return state;
  }
}
