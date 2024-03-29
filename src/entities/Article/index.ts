//  entities/Article/index.ts

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export type {
  Article,
  ArticleBlock,
  ArticleCodeBlock,
  ArticleTextBlock,
  ArticleImageBlock,
  ArticleBlockBase,
} from './model/types/article';
export {
  ArticleSortField,
  ArticleView,
  ArticleType,
  ArticleBlockType,
} from './model/consts/consts';
export { getArticleDetailsData } from './model/selectors/articleDetails';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { ArticleListItemSkeleton } from './ui/ArticleListItemSkeleton/ArticleListItemSkeleton';
