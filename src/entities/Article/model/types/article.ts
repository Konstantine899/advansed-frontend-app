// entities/Article/model/article.ts

/* Под каждый тип блока создаю собственный interface, т.е. под каждый тип блока из которого строится наша статья */

export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

/* ArticleBlockBase базовый тип от которого наследуются все блоки ArticleCodeBlock ArticleImageBlock ArticleTextBlock */
export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE /* Для того что бы у нас в будущем был идеальный автокомплит */;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE /* Для того что бы у нас в будущем был идеальный автокомплит */;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT /* Для того что бы у нас в будущем был идеальный автокомплит */;
  title?: string;
  paragraphs: string[];
}

/* Объединяем все блоки */
export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
