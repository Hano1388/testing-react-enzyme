import React from 'react';
import { mount } from 'enzyme';

import CreateTodo from 'components/CreateTodo';

describe('<CreateTodo />', () => {
  let wrapped;
  beforeEach( () => {
    wrapped = mount(<CreateTodo />);
  });

  afterEach( () => {
    wrapped.unmount();
  });

  it('has a text input and a button', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('has a text input that user can type in', () => {
    wrapped.find('input').simulate('change', {
      target: { value: 'new todo' }
    });
    wrapped.update();

    expect(wrapped.find('input').prop('value')).toEqual('new todo');
  });

});
