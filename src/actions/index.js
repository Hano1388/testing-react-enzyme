import { SAVE_TODO } from 'actions/types';

export const saveTodo = todo => {
  return {
    type: SAVE_TODO,
    payload: todo
  }
}
