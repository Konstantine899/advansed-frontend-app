// src/app/providers/router/ui/RequireAuth.tsx

import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData); // данные из state авторизован пользователь или нет
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
