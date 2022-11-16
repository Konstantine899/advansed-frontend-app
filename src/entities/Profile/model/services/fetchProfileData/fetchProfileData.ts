// entities/Profile/model/services/fetchProfileData/fetchProfileData.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { Profile } from "../../types/Profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get("/profile");
    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
