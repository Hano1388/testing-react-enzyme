import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('Shows Create todo box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('TodoList');

  ReactDOM.unmountComponentAtNode(div);
})
