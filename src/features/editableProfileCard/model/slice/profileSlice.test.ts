// features/editableProfileCard/model/slice/profileSlice.test.ts

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../consts/consts";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "../slice/profileSlice";
import {
  ProfileSchema,
} from "../types/editableProfileCardSchema";

const data = {
  id: "1",
  username: "admin",
  firstname: "Konstantin",
  lastname: "Atroshchenko",
  age: 33,
  country: Country.Belarus,
  city: "Vitebsk",
  currency: Currency.BYN,
};

describe("profileSlice.test", () => {
  // тестирую reducers
  test("setReadonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }; // режим чтения изначально инициализирую как false
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true))
    ).toEqual({ readonly: true }); // ожидаю что вернется state у которого readonly: true
  });

  test("cancelEdit", () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: "" } };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  // заметь что в updateProfile просто меняем поле form. Без копирования state.
  test("updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "Анастасия" },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "Екатерина" })
      )
    ).toEqual({ form: { username: "Екатерина" } });
  });

  // Тестирование extraReducers
  test("fetchProfileData pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      error: "error",
    };
    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending)
    ).toEqual({ isLoading: true, error: undefined }); // т.е. в момент загрузки должны сбросится ошибки и начаться загрузка
  });

  test("fetchProfileData fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      error: undefined,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      error: undefined,
      readonly: true,
      data,
      form: data,
    });
  });

  test("updateProfileData pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test("updateProfileData fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "")
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      form: data,
    });
  });
});
