// pages/ArticleDetailsPage/types/ArticleDetailsRecommendationsSchema.ts

import { EntityState } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";

export interface ArticleDetailsRecommendationsSchema
  extends EntityState<Article> {
  isLoading: boolean;
  error?: string;
}
