// pages/ArticlesPage/model/slices/ArticlesPageSlice.ts

import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";
import { StateSchema } from "app/providers/StoreProvider";
import { ArticlesPageSchema } from "pages/ArticlesPage";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";

const articleAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articleAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: `articlesPageSlice`,
  initialState: articleAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload); // сохраняю значение
    },
      initState: (state) => {
        state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView; // получаю значение
      }
  },
  extraReducers: (builder) => builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articleAdapter.setAll(state, action.payload);
        }
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
