// entities/model/types/user.ts

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  MANAGER = "MANAGER",
}

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
