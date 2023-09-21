// entities/Counter/selectors/getCounterValue/getCounterValue.ts
import { buildSelector } from "@/shared/lib/store";

export const [useCounterValue, getCounterValue] = buildSelector(
  (state) => state.counter.value
);
