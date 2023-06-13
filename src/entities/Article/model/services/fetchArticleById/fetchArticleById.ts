// entities/Article/model/services/fetchArticleById/fetchArticleById.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(`articleDetails/fetchArticleById`, async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    // Если данные с сервера не вернулись.
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});