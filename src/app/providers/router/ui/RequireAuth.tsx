// src/app/providers/router/ui/RequireAuth.tsx

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getUserAuthData, UserRole, getUserRoles } from "@/entities/User";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData); // данные из state авторизован пользователь или нет
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((requiredRole) => userRoles?.includes(requiredRole));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
}
