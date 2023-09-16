// shared/const/router.ts

// Названия списка путей которые есть в нашем приложении
export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    PROFILE = "profile",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "articles_details",
    ARTICLE_CREATE = "articles_create",
    ARTICLE_EDIT = "articles_edit",
    ADMIN_PANEL = "admin_panel",
    FORBIDDEN = "forbidden",

    // NOT_FOUND должен идти последним
    NOT_FOUND = "not_found",
}

// shared/const/router.ts
// путь до соответствующего компонента
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + id
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + id
    [AppRoutes.ARTICLE_CREATE]: "/articles/new",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/admin",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    // Последний
    [AppRoutes.NOT_FOUND]: "*",
};
