import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { ArticleView } from "entities/Article";
import { Card } from "shared/ui/Card/Card";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ArticleBlockType, ArticleTextBlock } from "entities/Article/model/types/article";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { ArticleTextBlockComponent } from "entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./ArticleListItemSkeleton.module.scss";

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
      return (
          <div
              className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
          >
            <Card className={cls.card}>
              <div className={cls.header}>
                <Skeleton width={30} height={30} border="50%" />
                <Skeleton width={150} height={16} className={cls.username} />
                <Skeleton width={150} height={16} className={cls.date} />
              </div>
              <Skeleton width={250} height={24} className={cls.title} />
              <Skeleton height={200} className={cls.img} />

              <div className={cls.footer}>
               <Skeleton width={200} height={36} />
              </div>
            </Card>
          </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
        </Card>
      </div>
    );
  }
);