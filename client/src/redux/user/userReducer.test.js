import { signInSuccess, signInFailure } from "./userActions";
import userReducer, { INITIAL_STATE } from "./userReducer.js";

test("returns initial state when no action is passed", () => {
  const newState = userReducer(undefined, {});
  expect(newState).toEqual(INITIAL_STATE);
});
