// features/editableProfileCard/model/selectors/getProfileValidateErrors.ts

import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
