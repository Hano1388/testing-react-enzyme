import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CreateTodo from '../CreateTodo';
import TodoList from '../TodoList';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('shows App has an instance of CreateTodo', () => {
    expect(wrapper.find(CreateTodo).length).toEqual(1);
  });

  it('shows App has an instance of TodoList', () => {
    expect(wrapper.find(TodoList).length).toEqual(1);
  });
});
