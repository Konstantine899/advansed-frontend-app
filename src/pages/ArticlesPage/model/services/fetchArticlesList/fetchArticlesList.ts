// pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleType } from '@/entities/Article';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { addQueryParams } from '@/shared/url/addQueryParams/addQueryParams';
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from '../../selectors/articlePageSelectors';

interface FetchArticleListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticleListProps,
  ThunkConfig<string>
>('ArticlesPage/fetchArticlesList', async (props, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  const limit = getArticlePageLimit(getState());
  const page = getArticlePageNum(getState());
  const sort = getArticlePageSort(getState());
  const order = getArticlePageOrder(getState());
  const search = getArticlePageSearch(getState());
  const type = getArticlePageType(getState());

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    }); // добавляю query параметры к строке запроса
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search, // в документации это просто поле q
        type: type === ArticleType.ALL ? undefined : type, // если type выбран как ALL, то тогда на сервер ничего не отправляем
      },
    });

    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
