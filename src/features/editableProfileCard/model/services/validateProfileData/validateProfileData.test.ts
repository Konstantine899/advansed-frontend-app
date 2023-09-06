// features/editableProfileCard/model/services/validateProfileData/validateProfileData.test.ts

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileError } from "../../consts/consts";
import { validateProfileData } from "./validateProfileData";

const data = {
  username: "admin",
  firstname: "Konstantin",
  lastname: "Atroshchenko",
  age: 33,
  country: Country.Belarus,
  city: "Vitebsk",
  currency: Currency.BYN,
};

describe("validateProfileData.test", () => {
  test("validateProfileData", () => {
    const result = validateProfileData(data); // На вход принимает данные
    expect(result).toEqual([]); // ожидаю пустой массив ошибок
  });

  test("without first name and last name", () => {
    const result = validateProfileData({
      ...data,
      firstname: "",
      lastname: "",
    });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect country", () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect all", () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
