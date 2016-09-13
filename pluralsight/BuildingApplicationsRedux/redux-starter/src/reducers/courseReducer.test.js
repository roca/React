import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';


describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialSate = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);
    //act
    const newState = courseReducer(initialSate, action);

    //asert
    expect(newState.length).toEqual(3);
  });

});
