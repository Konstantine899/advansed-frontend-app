// entities/Article/model/selectors/articleDetails.ts

import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;
export const getArticleDetailsIsError = (state: StateSchema) => state.articleDetails?.error;
