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

  it('has an input text and a button', () => {
    expect(wrapped.find('input').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
  })
});
