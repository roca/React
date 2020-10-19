import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a CommentBox', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    expect(div.innerHTML).toContain('Comment Box');

    ReactDOM.unmountComponentAtNode(div);

});

// it('shows a CommentList', () => {
//    const div = document.createElement('div');

//     ReactDOM.render(<App />, div);
    

//     ReactDOM.unmountComponentAtNode(div); 
// });