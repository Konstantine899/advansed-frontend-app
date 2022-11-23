// entities/model/types/user.ts

export interface User {
  id: string;
  username: string;
}

// interface для state
export interface UserSchema {
  authData?: User;
  _inited: boolean; // после получения данных о пользователе буду переводить в true
}
