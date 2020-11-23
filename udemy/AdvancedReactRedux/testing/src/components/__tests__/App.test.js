import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, Route } from "react-router-dom";

import Root from "Root";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Root>
  );
  // console.log(wrapped.html());
});

// it('should have a CommentBox', () => {
//     expect(wrapped.find(CommentBox).length).toEqual(1);
// });

it("should have a CommentList", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

it("it should have the GIT_BRANCH name in title", () => {
  expect(process.env.REACT_APP_GIT_BRANCH).toEqual("workflow");
  expect(wrapped.find("h2").length).toEqual(1);
  expect(wrapped.find("h2").text()).toEqual("GIT_BRANCH:" + process.env.REACT_APP_GIT_BRANCH);
});
