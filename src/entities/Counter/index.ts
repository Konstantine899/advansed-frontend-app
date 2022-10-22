// entities/Counter/index.ts
import { Counter } from "./ui/Counter";
import { counterReducer } from "./model/slice/counterSlice";
import type { CounterSchema } from "./model/types/CounterSchema";

export { Counter, counterReducer, CounterSchema, };
