// app/providers/StoreProvider/config/StateSchema.ts
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
