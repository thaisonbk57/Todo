import { GET_TODOS, ADD_TODO, DELETE_TODO } from "./actions";

const initState = {
  todos: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: [...action.todos]
      };

    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter(todo => {
          return todo._id !== action.todoId;
        })
      };

    default:
      return state;
  }
}
