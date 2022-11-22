// entities/Profile/model/selectors/getProfileError/getProfileError.test.ts
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "entities/Profile";

describe("getProfileData.test", () => {
  test("should return state", () => {
    const state: DeepPartial<StateSchema> = { profile: { error: "error" } };
    expect(getProfileError(state as StateSchema)).toBe("error");
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toBe(undefined);
  });
});