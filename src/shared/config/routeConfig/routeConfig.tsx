// src/shared/config/routeConfig/routeConfig.tsx
import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";

// Расширяю стандартные props библиотеки react-router-dom
export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

// Названия списка путей которые есть в нашем приложении
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "articles_details",

  // NOT_FOUND должен идти последним
  NOT_FOUND = "not_found",
}

// путь до соответствующего компонента
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.ARTICLES]: "/articles",
  [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id
  // Последний
  [AppRoutes.NOT_FOUND]: "*",
};

// Объявление роутов
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true, // если передаем true, то доступен только авторизованным пользователям
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true, // Статьи доступны только авторизованным пользователям
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.articles_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true, // Статья доступна только авторизованным пользователям
  },
  // NOT_FOUND должен идти последним
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
