// entities/Profile/model/services/fetchProfileData/fetchProfileData.test.ts

import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
  username: "admin",
  firstname: "Konstantin",
  lastname: "Atroshchenko",
  age: 33,
  country: Country.Belarus,
  city: "Vitebsk",
  currency: Currency.BYN,
};

describe('fetchProfileData.test', () => {
    test('success profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data })); // мокаю данные
        const result = await thunk.callThunk('1'); // вызываю async thunk
        expect(thunk.api.get).toHaveBeenCalled(); // проверяю что вызвался метод get
        expect(result.meta.requestStatus).toBe('fulfilled');// ожидаю что запрос выполнился успешно.
        expect(result.payload).toEqual(data);// ожидаю что в payload попали данные с сервера
    });

    test('error profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));// мокаю данные
        const result = await thunk.callThunk("1");// вызываю async thunk
        expect(thunk.api.get).toHaveBeenCalled(); // проверяю что вызвался метод get
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');// ожидаю что в payload попала строка error так как я прописал в async thunk
    });
});
