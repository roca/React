import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/index';


import Link from '../components/link';

const mapStateToProps = (state,ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)) 
  };
}

const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link);


export default FilterLink;


// class FilterLink extends Component {

//   componentDidMount() {
//     const {store} = this.context;
//     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//   }

//   componentWillUnMount() {
//     this.unsubscribe();
//   }

//   render() {
//     const props = this.props;
//     const { store } = this.context;
//     const state = store.getState();

//     return (
//       <Link
//         onClick={ () => store.dispatch({type: 'SET_VISIBILITY_FILTER',filter: props.filter}) }
//         active={ props.filter === state.visibilityFilter }
//       >
//         {props.children}
//       </Link>
//     );
//   }
// }

// FilterLink.contextTypes = {
//   store: React.PropTypes.object
// }


