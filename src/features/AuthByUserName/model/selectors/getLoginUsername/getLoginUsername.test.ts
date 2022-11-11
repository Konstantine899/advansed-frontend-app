// features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername.test.ts

import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername";

describe("getLoginUsername.test", () => {
  test("should return username", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: "Константин" },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("Константин");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
