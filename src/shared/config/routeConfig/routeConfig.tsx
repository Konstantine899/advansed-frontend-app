// src/shared/config/routeConfig/routeConfig.tsx
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

// Названия списка путей которые есть в нашем приложении
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

// путь до соответствующего компонента
export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

// Объявление роутов
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPage />,
    },
};
