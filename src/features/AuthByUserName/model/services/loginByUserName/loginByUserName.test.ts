// features/AuthByUserName/model/services/loginByUserName/loginByUserName.test.ts
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { loginByUserName } from "./loginByUserName";

describe("loginByUserName.test", () => {
  // let dispatch: Dispatch; // декларирую и типизирую переменную
  // let getState: () => StateSchema; // декларирую и типизирую переменную
  //
  // // мокаю getState и dispatch
  // beforeEach(() => {
  //   dispatch = jest.fn(); // Присваиваем функции
  //   getState = jest.fn(); // Присваиваем функции
  // });
  //
  // test("success login", async () => {
  //   const userValue = { username: "Константин", id: "1" }; // выношу для переиспользования
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUserName({ username: "Константин", password: "123" }); // создаю action
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue)); // проверяю вызов dispatch с аргументом action
  //   expect(dispatch).toHaveBeenCalledTimes(3); // проверка количества вызовов dispatch
  //   expect(mockedAxios.post).toHaveBeenCalled(); // убеждаемся что post был вызван
  //   expect(result.meta.requestStatus).toBe("fulfilled"); // проверяю статус promise
  //   expect(result.payload).toEqual(userValue); // проверяю что в payload содержаться данные о пользователе
  // });
  //
  // test("error login", async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUserName({ username: "Константин", password: "123" }); // создаю action
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledTimes(2); // проверка количества вызовов dispatch
  //   expect(mockedAxios.post).toHaveBeenCalled(); // убеждаемся что post был вызван
  //   expect(result.meta.requestStatus).toBe("rejected"); // проверяю статус promise
  //   expect(result.payload).toBe("error"); // проверяю какое содержимое ожидается в payload
  // });

  test("success login", async () => {
    const userValue = { username: "Константин", id: "1" }; // выношу для переиспользования
    /* создаю объект из класса */
    const thunk = new TestAsyncThunk(loginByUserName); // аргументом передаю async thunk
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({
      username: "Константин",
      password: "1",
    }); // передаю arg

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    ); // проверяю вызов dispatch с аргументом action
    expect(thunk.dispatch).toHaveBeenCalledTimes(3); // проверка количества вызовов dispatch
    expect(thunk.api.post).toHaveBeenCalled(); // убеждаемся что post был вызван
    expect(result.meta.requestStatus).toBe("fulfilled"); // проверяю статус promise
    expect(result.payload).toEqual(userValue); // проверяю что в payload содержаться данные о пользователе
  });

  test("error login", async () => {
    /* создаю объект из класса */
    const thunk = new TestAsyncThunk(loginByUserName); // аргументом передаю async thunk
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      username: "Константин",
      password: "1",
    }); // передаю arg

    expect(thunk.dispatch).toHaveBeenCalledTimes(2); // проверка количества вызовов dispatch
    expect(thunk.api.post).toHaveBeenCalled(); // убеждаемся что post был вызван
    expect(result.meta.requestStatus).toBe("rejected"); // проверяю статус promise
    expect(result.payload).toBe("error"); // проверяю какое содержимое ожидается в payload
  });
});
