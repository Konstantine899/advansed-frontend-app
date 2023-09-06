// features/editableProfileCard/model/selectors/getProfileReadonly.ts
import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileReadonly = (state: StateSchema) => state.profile?.readonly;
