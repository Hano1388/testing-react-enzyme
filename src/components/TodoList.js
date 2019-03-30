import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

  renderTodoList() {
    return this.props.todos.map(todo => {
      return <li key={todo}>{todo}</li>
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({todos}) => {
  return { todos }
}

export default connect(
  mapStateToProps
)(TodoList);
