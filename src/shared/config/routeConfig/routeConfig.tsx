// src/shared/config/routeConfig/routeConfig.tsx
import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";

// Названия списка путей которые есть в нашем приложении
export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",

    // NOT_FOUND должен идти последним
    NOT_FOUND = "not_found",
}

// путь до соответствующего компонента
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
    // Последний
    [AppRoutes.NOT_FOUND]: "*",
};

// Объявление роутов
export const routeConfig: Record<AppRoutes, RouteProps> = {
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
      element: <ProfilePage />
    },
        // NOT_FOUND должен идти последним
        [AppRoutes.NOT_FOUND]:
{
    path: RoutePath.not_found,
        element:
    <NotFoundPage />,
}
,
};
