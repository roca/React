import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import { BrowserRouter, Route } from "react-router-dom";

import Root from "Root";
import App from "components/App";

const initialState = {
  auth: true,
  comments: ["Comment 1", "Comment2"]
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(/.*\/comments/, {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

const myDone = () => {
  console.log("Im done!! now");
  return;
};

it("can fetch a list of comments and dispaly them", done => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root initialState={initialState}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Root>
  );
  // wrapped.find('button#btnSignIn').simulate('click');
  wrapped.find("a#postLink").simulate("click", { button: 0 });
  // find the 'fetchComments' button and click it
  wrapped.find("button#fetch-comments").simulate("click");
  wrapped.find("a#homeLink").simulate("click", { button: 0 });

  // Adds a pause
  moxios.wait(() => {
    wrapped.update();
    console.log(wrapped.html());

    // Expect to find a list of comments!
    try {
      expect(wrapped.find("li.comments").length).toEqual(4);
      console.log("Test Passed");
      done();
    } catch {
      done("Test broke");
    }
    wrapped.unmount();
  });
});
