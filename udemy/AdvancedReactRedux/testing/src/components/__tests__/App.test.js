import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';


const wrapped = shallow(<App />);

it('should have a CommentBox', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('should have a CommentList', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});