import React from 'react';
import { mount } from 'enzyme';

import TodoList from 'components/TodoList';
import Root from 'Root';

describe('<TodoList />', () => {

  let wrapped;

  beforeEach(() => {
    const initialState = {
      todos: ['First Todo', 'Second Todo']
    }

    wrapped = mount(
      <Root initialState={initialState}>
        <TodoList />
      </Root>
    );
  });

  it('creates an li tag for each Todo', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows the text for each Todo', () => {
    expect(wrapped.render().text()).toContain('First Todo');
    expect(wrapped.render().text()).toContain('Second Todo');
  });
});
