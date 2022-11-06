// shared/lib/tests/TestAsyncThunk/TestAsyncThunk.ts
import { StateSchema } from "app/providers/StoreProvider";
import { AsyncThunkAction } from "@reduxjs/toolkit";

type actionCreatorType<Return, Arg, RejectedValue> = (arg:Arg)=> AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue; }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  // Описываю типы для функций
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: actionCreatorType<Return, Arg, RejectedValue>; // указываю что в классе будет это поле

  constructor(actionCreator: actionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  // Вызываем action creator
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, undefined);
    return result;
  }
}
