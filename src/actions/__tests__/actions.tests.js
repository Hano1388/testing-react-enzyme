import { saveTodo } from 'actions';
import { SAVE_TODO } from 'actions/types';

describe('SAVE_TODO', () => {

  it('has the correct type', () => {
    const action = saveTodo();

    expect(action.type).toEqual(SAVE_TODO);
  });

  it('has the correct payload', () => {

    const action = saveTodo('New Todo');

    expect(action.payload).toEqual('New Todo');
  })
});
