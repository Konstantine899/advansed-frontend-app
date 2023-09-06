// features/AuthByUserName/model/selectors/getLoginError/getLoginError.test.ts
import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
  test("should return error", () => {
    /* Создаю состояние для кусочка state которое тестирую */
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: "error",
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    /* Создаю состояние для кусочка state которое тестирую */
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
