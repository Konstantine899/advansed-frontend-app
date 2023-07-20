// features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword.test.ts
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "../../selectors/getLoginPassword/getLoginPassword";

describe("getLoginPassword.test", () => {
  test("should return true", () => {
    /* Создаю состояние для кусочка state которое тестирую */
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "123456",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("123456");
  });
  test("should work with empty state", () => {
    /* Создаю состояние для кусочка state которое тестирую */
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
