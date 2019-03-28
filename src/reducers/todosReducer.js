import { SAVE_TODO } from 'actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case SAVE_TODO:
      return [...state, action.payload]
    default:
      return state;
  }
};
