// src/app/providers/router/ui/AppRouter.tsx
import React, { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import {
  AppRoutesProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";
import { Page } from "shared/ui/Page/Page";

const AppRouter = () => {
  // Функция обертка обработки маршрутов
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );
    return (
      <Route
        key={route.path}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
        path={route.path}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
export default memo(AppRouter);
