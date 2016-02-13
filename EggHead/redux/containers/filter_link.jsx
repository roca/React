import React, { Component } from 'react';

import Link from '../components/link';

class FilterLink extends Component {

  componentDidMount() {
    const {store} = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const { store } = props;
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
