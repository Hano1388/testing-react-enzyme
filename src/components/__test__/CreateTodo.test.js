import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';

import CreateTodo from 'components/CreateTodo';

describe('<CreateTodo />', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CreateTodo />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('has a text input and two buttons', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });

  describe('The input text', () => {
    beforeEach(() => {
      wrapped.find('input').simulate('change', {
        target: { value: 'new todo' }
      });
      wrapped.update();
    });
    it('has a text input that user can type in', () => {
      expect(wrapped.find('input').prop('value')).toEqual('new todo');
    });

    it('When form get submitted, input text gets emptied', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('input').prop('value')).toEqual('');
    });
  });
});
