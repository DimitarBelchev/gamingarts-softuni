import React from "react";
import { shallow } from "enzyme";
import PostDialogStats from "./PostDialogStats";

import {
  storeFactory,
  checkProps,
  findByTestAttribute,
} from "../../../utils/test/testUtils";

const mockCurrentUser = { _id: "123", username: "test", bookmarks: [] };

const INITIAL_PROPS = {
  post: {
    _id: "123",
    image: "www.image.com",
    caption: "test",
    author: { ...mockCurrentUser },
    postVotes: [{ votes: [] }],
    date: Date.now(),
  },
  token: "12345",
  currentUser: mockCurrentUser,
  dispatch: jest.fn(),
  profileDispatch: jest.fn(),
  bookmarkPost: jest.fn(),
};

const setup = (initialState = {}, additionalProps = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <PostDialogStats store={store} {...INITIAL_PROPS} {...additionalProps} />
  ).dive();
  return wrapper;
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, "component-post-dialog-stats");

  expect(component.exists()).toBeTruthy();
});

test("does not throw error with expected props", () => {
  const result = checkProps(PostDialogStats, INITIAL_PROPS);
  expect(result).toBeUndefined();
});
