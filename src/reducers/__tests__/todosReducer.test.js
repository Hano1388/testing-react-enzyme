import todosReducer from 'reducers/todosReducer';
import { SAVE_TODO } from 'actions/types';

describe('todosReducer', () => {
  it('handles actions of type SAVE_TODO', () => {
    const action = {
      type: SAVE_TODO,
      payload: 'New Todo'
    }

    const newState = todosReducer([], action);

    expect(newState).toEqual(['New Todo']);
  });

  it('handles actions with unknown type', () => {

    const newState = todosReducer([], { type: 'some jibrish' });

    expect(newState).toEqual([]);
  });
});
