// pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx

import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { ArticleList } from "entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLouder/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { Page } from "widgets/Page/Page";
import { ArticlesPageFilters } from "../../ui/ArticlesPageFilters/ArticlesPageFilters";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlePage } from "../../model/services/initArticlePage/initArticlePage";
import {
  getArticlePageIsError,
  getArticlePageIsLoading,
  getArticlePageIsView,
} from "../../model/selectors/articlePageSelectors";
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slices/ArticlesPageSlice";
import cls from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll); // преимущества использования адаптеров
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageIsError);
  const view = useSelector(getArticlePageIsView);
  const [searchParams] = useSearchParams();

  /* Подгрузка данных */
  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlePage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlesPageFilters />
        <ArticleList
          className={cls.list}
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
