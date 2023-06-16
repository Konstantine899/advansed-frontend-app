import { FC, lazy } from "react";
import { addCommentFormProps } from "./AddCommentForm";

export const addCommentFormAsync = lazy<FC<addCommentFormProps>>(
  () => new Promise((resolve) => {
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!! ДЕЛАЕМ ДЛЯ КУРСА!!!
      setTimeout(() => resolve(import("./AddCommentForm")), 1500);
    })
);
