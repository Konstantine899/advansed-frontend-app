// features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword.ts
import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginPassword = (state:StateSchema) => state?.loginForm?.password || '';
