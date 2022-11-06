// features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading.test.ts
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading";

describe("getLoginIsLoading.test", () => {
  test("should return true", () => {
    /* Создаю состояние для кусочка state которое тестирую */
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    /* Создаю состояние для кусочка state которое тестирую */
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
