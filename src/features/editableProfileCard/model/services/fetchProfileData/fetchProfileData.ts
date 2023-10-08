// features/editableProfileCard/model/services/fetchProfileData/fetchProfileData.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get(`/profile/${profileId}`);

    // Если данные с сервера не вернулись.
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
