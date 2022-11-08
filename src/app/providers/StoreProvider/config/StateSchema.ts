// app/providers/StoreProvider/config/StateSchema.ts
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserName";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

// Конструкция, с помощью которой достаю ключи. Которые являются названиями reducers
export type StateSchemaKey = keyof StateSchema;

// Описываю интерфейс ReducerManager
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

// тип для reducerManager
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
