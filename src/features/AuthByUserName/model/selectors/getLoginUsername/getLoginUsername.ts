// features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getLoginUsername = (state:StateSchema) => state?.loginForm?.username || '';
