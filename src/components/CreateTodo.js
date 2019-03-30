import React from 'react';
import { connect } from 'react-redux';

import { saveTodo, fetchTodos } from 'actions';

class CreateTodo extends React.Component {
  state = { todo: '' };

  onInputChange = (event) => {
    this.setState({ todo: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.saveTodo(this.state.todo);
    this.setState({ todo: ''});
  }

  render() {
    return (
      <div className="ui container">
        <form
          className="ui fluid form"
          onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <input
              type="text"
              value={this.state.todo}
              onChange={this.onInputChange}
            />
            <div className="ui pointing red basic label">
              Please enter a Todo
            </div>
            <button className="ui right floated primary button">Create Todo</button>
          </div>
          <div className="ui divider"></div>
        </form>
        <button
          onClick={this.props.fetchTodos}
          className="ui right floated yellow button"
        >
          Fetch Todos
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {
    saveTodo,
    fetchTodos
  }
)(CreateTodo);
