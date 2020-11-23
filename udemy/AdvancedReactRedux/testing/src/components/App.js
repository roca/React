import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// import * as actions from 'actions';
import { changeAuth } from "actions";

class App extends Component {
  renderBranch() {
    if (process.env.REACT_APP_GIT_BRANCH !== "master") {
      return <h2>GIT_BRANCH:{process.env.REACT_APP_GIT_BRANCH}</h2>;
    }
  }
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
      <div>
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
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderBranch()}
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
