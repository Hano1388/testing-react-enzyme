import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CreateTodo from '../CreateTodo';

it('Shows Create todo box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CreateTodo).length).toEqual(1);
})
