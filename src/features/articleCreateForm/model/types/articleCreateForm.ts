import { ArticleBlock, ArticleType } from '@/entities/Article';

export interface ArticleCreateFormSchema {
  title: string;
  subtitle: string;
  img: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
