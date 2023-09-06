// features/editableProfileCard/model/selectors/getProfileError.test.ts
import { StateSchema } from "@/app/providers/StoreProvider";
import { getProfileError } from "../getProfileError/getProfileError";

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
