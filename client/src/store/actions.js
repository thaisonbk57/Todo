import axios from "axios";
const baseURL = "http://localhost:5000";

export const FETCH_TODOS = "FETCH_TODOS";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// @param: todo Array[Object]

export const fetchTodos = () => dispatch => {
  axios
    .get(`${baseURL}/api/todos`)
    .then(response => {
      dispatch({
        type: GET_TODOS,
        todos: response.data.todos
      });
    })
    .catch(err => {
      console.log("Error!");
    });
};

// @param: todo: objects
export const addTodo = todo => dispatch => {
  axios
    .post(`${baseURL}/api/todos`, todo)
    .then(response => {
      console.log(response);
      dispatch({
        type: ADD_TODO,
        todo: response.data.todo
      });
    })
    .catch(err => {
      console.log("Error!");
    });
};

export const deleteTodo = todoId => dispatch => {
  axios
    .delete(`${baseURL}/api/todos/${todoId}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_TODO,
        todoId
      });
    })
    .catch(err => {
      console.log("ERROR! Item couldn't be deleted.");
    });
};
