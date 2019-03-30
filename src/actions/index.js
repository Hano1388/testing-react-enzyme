import axios from 'axios';
import {
  SAVE_TODO,
  FETCH_TODOS
} from 'actions/types';

export const saveTodo = todo => {
  return {
    type: SAVE_TODO,
    payload: todo
  }
};

export const fetchTodos = () => async (dispatch) => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/todos');

  dispatch({ type: FETCH_TODOS, payload: response.data });
}
