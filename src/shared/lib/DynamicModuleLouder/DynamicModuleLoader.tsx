// shared/lib/DynamicModuleLouder/DynamicModuleLouder.tsx
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
  StateSchemaKey,
  ReduxStoreWithManager,
  StateSchema,
} from '@/app/providers/StoreProvider';

/* типизирую props reducers
 * props - всегда объект
 * Так вот ключом будет name типа StateSchemaKey - где у нас описаны соответствующие ключи
 * А значением будет сам Reducer
 * В Reducer передаю generic StateSchema
 * с помощью него мы будем сопоставлять
 * название reducer, которое находится в ключе,
 * с самим reducer находящимся в значении.
 * Из StateSchema нам необходимо по ключу name получить нужный reducer
 * С помощью NonNullable указываю что reducer не должен быть нулевым  */
export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

// Типизирую кортеж
type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLouderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLouderProps) => {
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
