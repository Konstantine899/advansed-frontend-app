// app/providers/StoreProvider/config/store.ts
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  StateSchema,
  ThunkExtraArg,
} from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { NavigateOptions } from "react-router";
import { To } from "react-router-dom";
import { CombinedState, Reducer } from "redux";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  // Создаем отдельный объект для extra аргумента
  const extraArg: ThunkExtraArg = { api: $api, navigate };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: { extraArgument: extraArg },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]; // Типизирую dispatch
