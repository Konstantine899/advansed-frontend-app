// entities/Profile/model/selectors/getProfileData/getProfileData.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getProfileData = (state: StateSchema) => state.profile?.data;
