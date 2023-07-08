// pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage.async.tsx
import { lazy } from "react";

export const ArticleEditPageAsync = lazy(
  () => new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ ДЕЛАТЬ НЕЛЬЗЯ
      // @ts-ignore
      setTimeout(() => resolve(import("./ArticleEditPage")), 400);
    })
);
