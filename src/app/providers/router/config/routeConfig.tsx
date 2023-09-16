// app/providers/router/config/routeConfig.tsx

import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { UserRole } from "@/entities/User";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { AppRoutes, RoutePath } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

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
    path: `${RoutePath.profile}:id`,
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
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.articles_create}`,
    element: <ArticleEditPage />,
    authOnly: true, // Статья доступна только авторизованным пользователям
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.articles_edit}`,
    element: <ArticleEditPage />,
    authOnly: true, // Статья доступна только авторизованным пользователям
  },

  [AppRoutes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true, // доступ доступен только авторизованному пользователю
    roles: [UserRole.MANAGER, UserRole.ADMIN], // ограничиваем доступ к странице по роли пользователя
  },
  [AppRoutes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
    authOnly: true, // доступ доступен только авторизованному пользователю
  },
  // NOT_FOUND должен идти последним
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
