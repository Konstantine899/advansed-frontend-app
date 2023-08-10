// features/editableProfileCard/model/selectors/getProfileForm.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getProfileForm = (state: StateSchema) => state.profile?.form;
