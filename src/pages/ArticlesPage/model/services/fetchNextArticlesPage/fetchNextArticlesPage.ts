// pages/ArticlesPage/services/fetchNextArticlesPage/fetchNextArticlesPage.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
} from "../../selectors/articlePageSelectors";
import { articlesPageActions } from "../../slices/ArticlesPageSlice";
import { fetchArticlesList } from "../../services/fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(`ArticlesPage/fetchNextArticlesPage`, (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const hasMore = getArticlePageHasMore(getState());
  const page = getArticlePageNum(getState());
  const isLoading = getArticlePageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1)); // изменяю станицу в state
    dispatch(fetchArticlesList({})); // подгружаю данные со следующей страницы
  }
});
