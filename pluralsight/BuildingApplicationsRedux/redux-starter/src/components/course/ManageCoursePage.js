import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    //const {courses} = this.props;
    return (
      <h1>Manage Course Page</h1>
    );
  }
}

ManageCoursePage.propTypes = {
    // actions: PropTypes.object.isRequired,
    // myProp: PropTypes.string.isRequired
  };

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
   return {
     actions: bindActionCreators(courseActions,dispatch)
   };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
