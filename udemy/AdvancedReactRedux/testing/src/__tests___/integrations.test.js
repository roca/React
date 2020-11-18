import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(()=>{
    moxios.uninstall(); 
});

const myDone = () => {
    console.log('Im done!! now');
    return ;
};


it('cat fetch a list of comments and dispaly them', (done)  => {

    // Attempt to render the *entire* app
    const wrapped = mount (
        <Root>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Root>
    );

    // find the 'fetchComments' button and click it
    wrapped.find('#fetch-comments').simulate('click');

    // Adds a pause
    moxios.wait(() => {
        wrapped.update()

        // Expect to find a list of comments!
        try {
            expect(wrapped.find('li').length).toEqual(2);
            console.log('Test Passed');
            done();
        } catch {
            done('Test broke');
        }
        wrapped.unmount();
    });

});