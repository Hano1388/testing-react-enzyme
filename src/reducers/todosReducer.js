import {
  SAVE_TODO,
  FETCH_TODOS
} from 'actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case SAVE_TODO:
      return [action.payload, ...state];
    case FETCH_TODOS:
      const todos = action.payload.map(todo => todo.title);
      return [...state, ...todos];
    default:
      return state;
  }
};
