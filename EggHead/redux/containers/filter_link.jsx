import React, { Component } from 'react';

import {store} from '../todo_list_reducer'; //Test from L11
import Link from '../components/link';

class FilterLink extends Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link
        onClick={ () => store.dispatch({type: 'SET_VISIBILITY_FILTER',filter: props.filter}) }
        active={ props.filter === state.visibilityFilter }
      >
        {props.children}
      </Link>
    );
  }
}


export default FilterLink;
