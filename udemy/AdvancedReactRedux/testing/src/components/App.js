import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// import * as actions from 'actions';
import { changeAuth } from "actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button id="btnSignIn" onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </button>
      );
    }
    return (
      <button id="btnSignIn" onClick={() => this.props.changeAuth(true)}>
        Sign In
      </button>
    );
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link id="homeLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="postLink" to="/post">
            Post a comment
          </Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { changeAuth })(App);
