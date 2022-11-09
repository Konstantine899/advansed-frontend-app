// app/providers/StoreProvider/index.ts
export { createReduxStore, AppDispatch } from "app/providers/StoreProvider/config/store";
export { StoreProvider } from "./ui/StoreProvider";
export type { StateSchema, ReduxStoreWithManager, ThunkConfig } from "./config/StateSchema";
