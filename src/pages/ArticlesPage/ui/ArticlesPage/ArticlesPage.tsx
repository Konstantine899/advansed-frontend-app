// pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.tsx

import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from "entities/Article";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLouder/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
  getArticlePageIsError,
  getArticlePageIsLoading,
  getArticlePageIsView,
} from "../../model/selectors/articlePageSelectors";
import {
  articlesPageActions,
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

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll); // преимущества использования адаптеров
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageIsError);
  const view = useSelector(getArticlePageIsView);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState()); // получаю данные из localstorage
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ArticleViewSelector view={view} onViewClick={onChangeView} />
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
