// pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlePageLimit } from "pages/ArticlesPage/model/selectors/articlePageSelectors";

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>(`ArticlesPage/fetchArticlesList`, async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const { page = 1 } = props;
  const limit = getArticlePageLimit(getState());

  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: { _expand: `user`, _limit: limit, _page: page },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`error`);
  }
});
