// entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly.test.ts

import { StateSchema } from "app/providers/StoreProvider";
import { getProfileIsLoading } from "../getProfileIsLoading/getProfileIsLoading";
import { getProfileReadonly } from "../getProfileReadonly/getProfileReadonly";

describe("getProfileReadonly.test", () => {
  test("should return state", () => {
    const state: DeepPartial<StateSchema> = { profile: { readonly: true } };
    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
