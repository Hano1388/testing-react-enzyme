import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CreateTodo from 'components/CreateTodo';
import TodoList from 'components/TodoList';
import { authenticate } from 'actions'

class App extends React.Component {

  state = {
    activeLink: {
      home: window.location.pathname === '/' ? 'item active' : 'item',
      createTodo: window.location.pathname === '/new' ? 'item active' : 'item'
    }
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <button
          className="ui right floated red button"
          onClick={() => this.props.authenticate(false)}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="ui right floated primary button"
          onClick={() => this.props.authenticate(true)}
        >
        Sign In
        </button>
      );
    }

  }
  renderHeader() {
    return (
      <div className="ui container">
      {this.renderButton()}
        <div className="ui tabular menu">
          <Link
            id="home-link"
            className={this.state.activeLink.home}
            to="/"
            onClick={e => this.setState({ activeLink: { home: 'item active', createTodo: 'item' } })}
          >
            Home
          </Link>
          <Link
            id="new-todo-link"
            className={this.state.activeLink.createTodo}
            to="/new"
            onClick={e => this.setState({ activeLink: { home: 'item', createTodo: 'item active' } })}
          >
            Create a Todo
          </Link>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/" exact component={TodoList} />
        <Route path="/new" component={CreateTodo} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, { authenticate })(App);
