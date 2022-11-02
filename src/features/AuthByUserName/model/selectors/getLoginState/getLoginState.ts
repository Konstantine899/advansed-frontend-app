// features/AuthByUserName/model/selectors/getLoginState/getLoginState.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getLoginState = (state: StateSchema) => state?.loginForm;
