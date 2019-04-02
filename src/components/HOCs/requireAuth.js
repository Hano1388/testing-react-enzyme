import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.navigateMe();
    }

    componentDidUpdate() {
      this.navigateMe();
    }

    navigateMe() {
      if(!this.props.auth) {
        document.querySelector('#home-link').click(); // NOTE: this is a bad approach, the following line will do the work but, I am only using it to trigger an on click event on the home link
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  const mapStateToProps = ({ auth }) => {
    return { auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
}
