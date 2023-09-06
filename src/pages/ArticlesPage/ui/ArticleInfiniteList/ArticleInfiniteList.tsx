import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ArticleList } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import {
  getArticlePageIsError,
  getArticlePageIsLoading,
  getArticlePageIsView,
} from "../../model/selectors/articlePageSelectors";
import { getArticles } from "../../model/slices/ArticlesPageSlice";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const articles = useSelector(getArticles.selectAll); // преимущества использования адаптеров
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageIsError);
  const view = useSelector(getArticlePageIsView);

  if (error) {
    return <Text text={t(`Ошибка при загрузке статей`)} />;
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
    />
  );
});
