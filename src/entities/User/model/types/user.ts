// entities/model/types/user.ts

import { UserRole } from '../../model/consts/consts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
}

// interface для state
export interface UserSchema {
  authData?: User;
  _inited: boolean; // после получения данных о пользователе буду переводить в true
}
