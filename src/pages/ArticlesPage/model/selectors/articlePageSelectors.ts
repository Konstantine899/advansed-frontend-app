// pages/ArticlesPage/model/selectors/articlePageSelectors.ts

import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType, ArticleView } from "entities/Article";

export const getArticlePageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageIsError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlePageIsView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageNum = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlePageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlesPage?._inited;

// нельзя использовать оператор || если в input мы введем null то он отработает не корректно
// null для js это false значение. В таком случае для null у нас подставится пустая строка
// В таком случае лучше использовать Nullish operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// Пустой строкой state проинициализируется только тогда когда левый операнд у нас null или undefined
export const getArticlePageOrder = (state: StateSchema) => state.articlesPage?.order ?? `asc`;
export const getArticlePageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlePageSearch = (state: StateSchema) => state.articlesPage?.search ?? "";
export const getArticlePageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
