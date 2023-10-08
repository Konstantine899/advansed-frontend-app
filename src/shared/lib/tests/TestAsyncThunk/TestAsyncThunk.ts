// shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

type actionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios'); // мокаем модуль

const mockedAxios = jest.mocked(axios, true); // Глубокое моканье модуля. С захватом внутренних полей

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  // Описываю типы для функций
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: actionCreatorType<Return, Arg, RejectedValue>; // указываю что в классе будет это поле

  navigate: jest.MockedFn<any>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    actionCreator: actionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.navigate = jest.fn();
    this.api = mockedAxios; // присваиваю замоканый axios в состояние
    this.getState = jest.fn(() => state as StateSchema);
  }

  // Вызываем action creator
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
    return result;
  }
}
