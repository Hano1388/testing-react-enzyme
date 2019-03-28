import React from 'react';

const CreateTodo = () => {
  return (
    <div className="ui container">
      <form className="ui fluid form">
        <div className="field">
          <input type="text" placeholder="Todo" />
          <div className="ui pointing red basic label">
            Please enter a Todo
          </div>
          <button className="ui right floated primary button">Submit</button>
        </div>
        <div className="ui divider"></div>
      </form>

    </div>
  )
}

export default CreateTodo;
