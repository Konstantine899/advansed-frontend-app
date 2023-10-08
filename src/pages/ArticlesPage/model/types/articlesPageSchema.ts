// pages/ArticlesPage/model/types/articlesPageSchema.ts

import { EntityState } from '@reduxjs/toolkit';
import {
  Article,
  ArticleView,
  ArticleSortField,
  ArticleType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;

  _inited: boolean; // проинициализировался state или нет

  // pagination
  page: number; // номер страницы
  limit: number; // количество элементов
  hasMore: boolean; // флаг, который показывает, загрузили мы все статьи или еще есть порция для подгрузки

  // filters
  view: ArticleView; // отображение в виде плитки или больших блоков
  order: SortOrder; // Порядок сортировки. От меньшего к большему или наоборот.
  sort: ArticleSortField; // поля по которым будем происходить сортировка
  search: string; // поисковая строка
  type: ArticleType; // ArticleType это enum наших статей ALL, IT, SCIENCE, ECONOMICS
}
