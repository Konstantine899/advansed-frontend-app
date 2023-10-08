// shared/types/router.ts
// Расширяю стандартные props библиотеки react-router-dom
import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line konstantine899-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};
