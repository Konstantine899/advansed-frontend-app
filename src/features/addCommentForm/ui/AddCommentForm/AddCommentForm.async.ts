import { FC, lazy } from 'react';
import { addCommentFormProps } from './AddCommentForm';

export const addCommentFormAsync = lazy<FC<addCommentFormProps>>(
  () => import('./AddCommentForm'),
);
