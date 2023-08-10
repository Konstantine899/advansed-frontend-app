// features/editableProfileCard/model/selectors/getProfileForm.test.ts

import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "../getProfileForm/getProfileForm";

describe("getProfileForm.test", () => {
  test("should return state", () => {
    const form = {
      username: "admin",
      firstname: "Konstantin",
      lastname: "Atroshchenko",
      age: 33,
      country: Country.Belarus,
      city: "Vitebsk",
      currency: Currency.BYN,
    };
    const state: DeepPartial<StateSchema> = { profile: { form } };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
