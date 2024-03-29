import React from "react";
import { mount } from "enzyme";

import Root from "Root";

import CommentBox from "components/CommentBox";

let wrapped, mockEvent;

beforeEach(() => {
  const initialState = {
    auth: true
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should have a textarea and two button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("The textarea ", () => {
  beforeEach(() => {
    mockEvent = { target: { value: "new comment" } };
    wrapped.find("textarea").simulate("change", mockEvent);
    wrapped.update();
  });

  it("should allow users to type in text", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual(mockEvent.target.value);
  });

  it("should be empty when the form is submitted ", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
