// features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading.ts
import { StateSchema } from "app/providers/StoreProvider";

export const getLoginIsLoading = (state:StateSchema) => state?.loginForm?.isLoading || false;
