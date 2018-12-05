import { GET_TODOS } from "./actions";

const initState = {};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        todos: [...action.todos]
      };
    default:
      return state;
  }
}
