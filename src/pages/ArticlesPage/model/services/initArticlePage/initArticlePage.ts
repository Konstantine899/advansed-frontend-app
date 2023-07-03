// pages/ArticlesPage/services/initArticlePage/initArticlePage.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlePageInited } from "pages/ArticlesPage/model/selectors/articlePageSelectors";
import { articlesPageActions } from "pages/ArticlesPage/model/slices/ArticlesPageSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { SortOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article";

export const initArticlePage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(`ArticlesPage/initArticlePage`, (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlePageInited(getState());
  // Если state не проинициализирован, то делаю запрос на сервер. В обратном случае этого не делаю
  if (!inited) {
    /* Вытаскиваю все необходимые данные из url */
    const orderFromUrl = searchParams.get("order") as SortOrder;
    const sortFromUrl = searchParams.get("sort") as ArticleSortField;
    const searchFromUrl = searchParams.get("search");
    const typeFromUrl = searchParams.get("type") as ArticleType;
    /* добавляю данные в state */
    if (orderFromUrl) dispatch(articlesPageActions.setOrder(orderFromUrl));
    if (sortFromUrl) dispatch(articlesPageActions.setSort(sortFromUrl));
    if (searchFromUrl) dispatch(articlesPageActions.setSearch(searchFromUrl));
    if (typeFromUrl) dispatch(articlesPageActions.setType(typeFromUrl));
    dispatch(articlesPageActions.initState()); // получаю данные из localstorage
    dispatch(fetchArticlesList({}));
  }
});
