// entities/User/model/selectors/getUserAuthData/getUserAuthData.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getUserAuthData = (state: StateSchema) => state.user.authData;
