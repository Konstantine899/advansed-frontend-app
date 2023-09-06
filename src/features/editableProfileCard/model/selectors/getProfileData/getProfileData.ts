// features/editableProfileCard/model/selectors/getProfileData.ts
import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileData = (state: StateSchema) => state.profile?.data;
