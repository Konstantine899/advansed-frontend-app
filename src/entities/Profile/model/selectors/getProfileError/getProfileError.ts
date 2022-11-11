// entities/Profile/model/selectors/getProfileError/getProfileError.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getProfileError = (state: StateSchema) => state.profile?.error;
