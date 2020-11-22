import React from "react";
import { mount } from "enzyme";
import cheerio from "cheerio";

import Root from "Root";

import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should create on LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("should show the text for each comment", () => {
  const $ = cheerio.load(wrapped.render().html());

  expect($("li").first().text()).toContain("Comment 1");
  expect($("li:nth-child(2)").text()).toContain("Comment 2");
});
