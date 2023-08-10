// features/editableProfileCard/model/selectors/getProfileIsLoading.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getProfileIsLoading = (state: StateSchema) => state.profile?.isLoading;
