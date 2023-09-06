// pages/ArticleDetailsPage/model/services/fetchArticlesRecommendations/fetchArticlesRecommendations.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";
import { ThunkConfig } from "@/app/providers/StoreProvider";

export const fetchArticlesRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  `ArticleDetailsPage/fetchArticlesRecommendations`,
  async (props, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _limit: 4,
        },
      });

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(`error`);
    }
  }
);
