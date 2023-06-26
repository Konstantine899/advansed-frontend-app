// shared/lib/DynamicModuleLouder/DynamicModuleLouder.tsx
import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

/* типизирую props reducers
 * props - всегда объект
 * Так вот ключом будет name типа StateSchemaKey - где у нас описаны соответствующие ключи
 * А значением будет сам Reducer  */
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

// Типизирую кортеж
type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLouderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLouderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]; // по названию reducer достаю нужный reducer
      // Добавляем новый reducer если его нет
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
