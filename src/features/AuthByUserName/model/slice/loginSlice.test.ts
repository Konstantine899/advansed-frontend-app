// features/AuthByUserName/model/slice/loginSlice.test.ts
import { LoginSchema } from "features/AuthByUserName";
import { DeepPartial } from "@reduxjs/toolkit";
import { loginByUserName } from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "Екатерина" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("Константин"))
    ).toEqual({ username: "Константин" });
  });
  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "1234" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123456789"))
    ).toEqual({ password: "123456789" });
  });
  test("test set isLoading", () => {
    const state: DeepPartial<LoginSchema> = { isLoading: false };
    expect(loginReducer(state as LoginSchema, loginByUserName.pending)).toEqual(
      { isLoading: true }
    );
    expect(
      loginReducer(state as LoginSchema, loginByUserName.fulfilled)
    ).toEqual({ isLoading: false });
    expect(
      loginReducer(state as LoginSchema, loginByUserName.rejected)
    ).toEqual({ isLoading: false });
  });
  test("test set error", () => {});
});
