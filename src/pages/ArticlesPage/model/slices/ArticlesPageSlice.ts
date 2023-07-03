// pages/ArticlesPage/model/slices/ArticlesPageSlice.ts

import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
 Article, ArticleType, ArticleView, ArticleSortField
} from "entities/Article";
import { StateSchema } from "app/providers/StoreProvider";
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { SortOrder } from "shared/types";
import { ArticlesPageSchema } from "../types/articlesPageSchema";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: `articlesPageSlice`,
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    sort: ArticleSortField.CREATED,
    order: "asc",
    search: "",
    type: ArticleType.ALL, // по умолчанию я показываю все типы статей
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload); // сохраняю значение
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },

    initState: (state) => {
      const view = localStorage.getItem(
        ARTICLE_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView; // получаю значение
      state.view = view; // сохраняю в state
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true; // меняю на true тем самым говорю что state проинициализировался
    },
  },
  extraReducers: (builder) => builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state); // просто очищаю массив
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }

        state.hasMore = action.payload.length >= state.limit; // если статей пришло меньше чев в limit перевожу hasMore в false
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
