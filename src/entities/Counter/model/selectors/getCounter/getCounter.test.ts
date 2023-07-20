// entities/Counter/selectors/getCounter/getCounter.test.ts
import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "../../selectors/getCounter/getCounter";

describe("getCounter", () => {
  test("should return counter value", () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
