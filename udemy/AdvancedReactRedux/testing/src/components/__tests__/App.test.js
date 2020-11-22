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
