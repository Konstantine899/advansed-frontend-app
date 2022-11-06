// features/AuthByUserName/model/selectors/getLoginError/getLoginError.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getLoginError = (state: StateSchema) => state?.loginForm?.error || undefined;
