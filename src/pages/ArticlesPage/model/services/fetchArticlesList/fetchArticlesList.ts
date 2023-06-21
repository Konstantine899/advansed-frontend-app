// pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchArticlesList = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(`ArticlesPage/fetchArticlesList`, async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: { _expand: `user` },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`error`);
  }
});
