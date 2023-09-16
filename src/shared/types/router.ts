// shared/types/router.ts
// Расширяю стандартные props библиотеки react-router-dom
import { RouteProps } from "react-router-dom";
import { UserRole } from "@/entities/User";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
