// pages/ArticlesPage/model/types/articlesPageSchema.ts

import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView; // отображение в виде плитки или больших блоков

  // pagination
  page: number; // номер страницы
  limit?: number; // количество элементов
  hasMore: boolean; // флаг, который показывает, загрузили мы все статьи или еще есть порция для подгрузки
}
