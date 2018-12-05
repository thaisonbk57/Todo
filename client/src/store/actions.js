import axios from "axios";
const baseURL = "http://localhost:5000";

export const FETCH_TODOS = "FETCH_TODOS";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// @param: todo Array[Object]
export const getTodos = todos => ({
  type: GET_TODOS,
  todos
});

export const fetchTodos = () => dispatch => {
  axios
    .get(`${baseURL}/api/todos`)
    .then(response => {
      dispatch(getTodos(response.data.todos));
    })
    .catch(err => {
      console.log("Error!");
    });
};

// @param: todo: objects
export const addTodo = todo => {
  return {
    type: ADD_TODO,
    todo
  };
};
