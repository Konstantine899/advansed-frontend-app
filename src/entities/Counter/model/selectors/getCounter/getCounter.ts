// entities/Counter/selectors/getCounter/getCounter.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getCounter = (state: StateSchema) => state.counter;
