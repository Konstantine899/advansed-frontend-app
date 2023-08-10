// features/editableProfileCard/model/selectors/getProfileError.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getProfileError = (state: StateSchema) => state.profile?.error;
