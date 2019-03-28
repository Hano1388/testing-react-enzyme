import React from 'react';

class CreateTodo extends React.Component {
  state = { todo: '' };

  onInputChange = (event) => {
    this.setState({ todo: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.setState({ todo: ""});
  }

  render() {
    return (
      <div className="ui container">
        <form className="ui fluid form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              value={this.state.todo}
              onChange={this.onInputChange}
            />
            <div className="ui pointing red basic label">
              Please enter a Todo
            </div>
            <button className="ui right floated primary button">Submit</button>
          </div>
          <div className="ui divider"></div>
        </form>
      </div>
    );
  }
}

export default CreateTodo;
