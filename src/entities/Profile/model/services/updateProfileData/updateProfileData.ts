// entities/Profile/model/services/updateProfileData/updateProfileData.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { validateProfileData } from "../../services/validateProfileData/validateProfileData";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { Profile, ValidateProfileError } from "../../types/profile";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  // получаю данные с формы
  const formData = getProfileForm(getState());

  // валидирую поля
  const errors = validateProfileData(formData);

  // если есть хоть одна ошибка завершаю выполнение с ошибкой
  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put(`/profile/${formData?.id}`, formData);
    if (!response.data) throw new Error(); // если данные с сервера не вернулись
    return response.data;
  } catch (error) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
