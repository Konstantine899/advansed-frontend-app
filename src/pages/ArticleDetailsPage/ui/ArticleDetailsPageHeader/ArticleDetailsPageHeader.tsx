// pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader.tsx
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getArticleDetailsData } from "@/entities/Article";
import { HStack } from "@/shared/ui/Stack";
import { getCanEditArticle } from "../../model/selectors/article";
import {
  getRouteArticleDetails,
  getRouteArticles,
} from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle); // если user.id и id автора статьи совпадают return true
    const article = useSelector(getArticleDetailsData);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(`${getRouteArticleDetails(article.id)}`);
      }
    }, [article, navigate]);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    return (
      <HStack max justify="between" className={classNames("", {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t(`Назад`)}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
            {t(`Редактировать`)}
          </Button>
        )}
      </HStack>
    );
  }
);
