// entities/Article/ui/ArticleList/ArticleList.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleListItemSkeleton } from "shared/ui/ArticleListItemSkeleton/ArticleListItemSkeleton";
import { ArticleListItem } from "../../ui/ArticleListItem/ArticleListItem";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
 className, articles, isLoading, view = ArticleView.SMALL
} = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      className={cls.card}
      key={article.id}
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles?.map(renderArticle) : null}
    </div>
  );
});
