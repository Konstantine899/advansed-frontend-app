// features/AuthByUserName/model/services/loginByUserName/loginByUserName.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkConfig } from "app/providers/StoreProvider";

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, ThunkConfig<string>>(
    "login/createAsyncThunk",
    async (authData, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.api.post<User>(`/login`, authData);

                      if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            // Сохраняю данные полученные с сервера в state
            dispatch(userActions.setAuthData(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    }
);
