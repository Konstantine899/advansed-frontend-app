// features/AddCommentForm/index.ts
export type { AddCommentFormSchema } from './model/types/addCommentForm';

export { addCommentFormAsync as AddCommentForm } from './ui/AddCommentForm/AddCommentForm.async';
export { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
