// src/app/providers/router/ui/AppRouter.tsx
import React, { memo, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "@/widgets/PageLoader";
import { RequireAuth } from "./RequireAuth";
import { routeConfig } from "../config/routeConfig";
import { AppRoutesProps } from "@/shared/types/router";

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
          route.authOnly ? (
            <RequireAuth roles={route.roles}>{element}</RequireAuth>
          ) : (
            element
          )
        }
        path={route.path}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
export default memo(AppRouter);
