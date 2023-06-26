// pages/ArticlesPage/services/initArticlePage/initArticlePage.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlePageInited } from "pages/ArticlesPage/model/selectors/articlePageSelectors";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/ArticlesPageSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";

export const initArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(`ArticlesPage/initArticlePage`, (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlePageInited(getState());
  // Если state не проинициализирован, то делаю запрос на сервер. В обратном случае этого не делаю
  if (!inited) {
    dispatch(articlesPageActions.initState()); // получаю данные из localstorage
    dispatch(fetchArticlesList({ page: 1 }));
  }
});
