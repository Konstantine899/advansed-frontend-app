// src/app/providers/router/ui/AppRouter.tsx
import React, {
 memo, Suspense, useCallback, useMemo
} from "react";
import { Route, Routes } from "react-router-dom";

import {
  AppRoutes,
  AppRoutesProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";

const AppRouter = () => {
  // Функция обертка обработки маршрутов
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
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
