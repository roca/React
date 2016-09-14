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

  it('should update course when passed UPDATE_COURSE_SUCCESS', function() {
   // arange
    const initialSate = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'},
      {id: 'C', title: 'C'}
    ];
    const course = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(course);

    //acct
    const newState = courseReducer(initialSate, action);
    const updatedCourse = newState.find( a => a.id === course.id);
    const untouchedCourse = newState.find( a => a.id === 'A');

    //assert
    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });


});
