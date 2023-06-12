// entities/Article/ui/ArticleDetails/ArticleDetails.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLouder/DynamicModuleLoader";
import { memo, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextAlign } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import {
  getArticleDetailsData,
  getArticleDetailsIsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  // const isLoading = useSelector(getArticleDetailsIsLoading);
  const isLoading = true; // для проверки работоспособности
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsIsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  /* Условие загрузки данных */
  let content;
  if (isLoading) {
    // pending
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    // error
    // eslint-disable-next-line i18next/no-literal-string
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t(`Произошла ошибка при загрузке статьи`)}
      />
    );
  } else {
    // success
    // eslint-disable-next-line i18next/no-literal-string
    content = <div>ArticleDetails</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
