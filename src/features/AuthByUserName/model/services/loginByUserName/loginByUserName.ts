// features/AuthByUserName/model/services/loginByUserName/loginByUserName.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface loginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, { rejectValue:string }>(
  "login/createAsyncThunk",
  async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(`http://localhost:8000/login`, authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        // Сохраняю данные полученные с сервера в state
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('error');
    }
  }
);
