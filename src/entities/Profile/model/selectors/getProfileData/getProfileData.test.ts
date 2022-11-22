// entities/Profile/model/selectors/getProfileData/getProfileData.test.ts

import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "entities/Profile";

describe('getProfileData.test', () => {
test('should return state', () => {
    const data = {
        username: "admin",
        firstname: 'Konstantin',
        lastname: 'Atroshchenko',
        age: 33,
        country: Country.Belarus,
        city: 'Vitebsk',
        currency: Currency.BYN
    };
    const state:DeepPartial<StateSchema> = { profile: { data } };
    expect(getProfileData(state as StateSchema)).toEqual(data);
});

test('should work with empty state', () => {
    const state:DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
});
});
