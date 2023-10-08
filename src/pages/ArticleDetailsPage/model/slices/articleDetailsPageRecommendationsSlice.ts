// pages/ArticleDetailsPage/slices/articleDetailsPageRecommendationsSlice.ts

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchArticlesRecommendations } from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

export const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

// селекторы
export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations
      || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
      {
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
      },
    ),
  reducers: {},
  extraReducers: (builder) => builder
    .addCase(fetchArticlesRecommendations.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    })
    .addCase(fetchArticlesRecommendations.fulfilled, (state, action) => {
      state.isLoading = false;
      recommendationsAdapter.setAll(state, action.payload);
    })
    .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
