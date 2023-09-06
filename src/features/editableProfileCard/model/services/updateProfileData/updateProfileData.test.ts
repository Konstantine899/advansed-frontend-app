// features/editableProfileCard/model/services/updateProfileData/updateProfileData.test.ts

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileError } from "../../consts/consts";
import { updateProfileData } from "../updateProfileData/updateProfileData";

const data = {
  username: "admin",
  firstname: "Konstantin",
  lastname: "Atroshchenko",
  age: 33,
  country: Country.Belarus,
  city: "Vitebsk",
  currency: Currency.BYN,
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    }); // вторым аргументом прокидываю данные для redux state профиля пользователя
    thunk.api.put.mockReturnValue(Promise.resolve({ data })); // мокаю возвращаемые данные
    const result = await thunk.callThunk(); // вызываю async thunk
    expect(thunk.api.put).toHaveBeenCalled(); // проверяю что вызвался метод put
    expect(result.meta.requestStatus).toBe("fulfilled"); // ожидаю что запрос выполнился успешно.
    expect(result.payload).toEqual(data); // ожидаю что в payload попали данные с сервера
  });

  // сценарий не удачного получения данных после обновления
  test("error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    }); // вторым аргументом прокидываю данные для redux state профиля пользователя
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(); // вызываю async thunk
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]); // ожидаем в payload серверную ошибку которую вернула нам наша валидация
  });

  // Обработка клиентских ошибок
  // валидация

  test("validate error lastname", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, lastname: "" } },
    }); // вторым аргументом прокидываю данные для redux state профиля пользователя
    const result = await thunk.callThunk(); // вызываю async thunk
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("validate error lastname firstname", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, firstname: "" } },
    }); // вторым аргументом прокидываю данные для redux state профиля пользователя
    const result = await thunk.callThunk(); // вызываю async thunk
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("validate error lastname age", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, age: NaN } },
    }); // вторым аргументом прокидываю данные для redux state профиля пользователя
    const result = await thunk.callThunk(); // вызываю async thunk
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("validate error lastname country", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, country: undefined } },
    }); // вторым аргументом прокидываю данные для redux state профиля пользователя
    const result = await thunk.callThunk(); // вызываю async thunk
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
