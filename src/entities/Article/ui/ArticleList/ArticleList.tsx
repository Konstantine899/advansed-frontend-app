// entities/Article/ui/ArticleList/ArticleList.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleListItemSkeleton } from "shared/ui/ArticleListItemSkeleton/ArticleListItemSkeleton";
import { Text, TextSize } from "shared/ui/Text/Text";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { PAGE_ID } from "widgets/Page/Page";
import { ArticleListItem } from "../../ui/ArticleListItem/ArticleListItem";
import { Article, ArticleView } from "../../model/types/article";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;
  const { t } = useTranslation();

  const isBig = view === ArticleView.BIG;
  const itemsPerRow = isBig ? 1 : 3; // количество элементов в строке
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow); // количество строк

  const rowRender = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow; // index * на количество элементов с строке
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length); // константа с index которым мы ограничиваемся

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          className={cls.card}
          view={view}
          target={target}
          key={`str${i}`}
        />
      );
    }

    return (
      <div key={key} className={cls.row} style={style}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t(`Статьи не найдены`)} />
      </div>
    );
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        width,
        height,
        registerChild,
        scrollTop,
        isScrolling,
        onChildScroll,
      }) => (
        <div
          ref={registerChild}
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>

    // <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //     {articles.length > 0 ? articles?.map(renderArticle) : null}
    //     {isLoading && getSkeletons(view)}
    // </div>
  );
});