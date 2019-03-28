import React from 'react';

import CreateTodo from 'components/CreateTodo';
import TodoList from 'components/TodoList';

const App = () => {
  return (
    <div>
      <CreateTodo />
      <TodoList />
    </div>
  )
}

export default App;
