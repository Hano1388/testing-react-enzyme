import axios from 'axios';
import {
  SAVE_TODO,
  FETCH_TODOS,
  AUTHENTICATE
} from 'actions/types';

export const saveTodo = todo => {
  return {
    type: SAVE_TODO,
    payload: todo
  }
};

// export const fetchTodos = () => async (dispatch) => {
//   const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
//
//   dispatch({ type: FETCH_TODOS, payload: response.data });
// }

export const fetchTodos = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/todos');

  return {
    type: FETCH_TODOS,
    payload: response
  }
}

export const authenticate = isLoggedIn => {
  return {
    type: AUTHENTICATE,
    payload: isLoggedIn
  }
}
