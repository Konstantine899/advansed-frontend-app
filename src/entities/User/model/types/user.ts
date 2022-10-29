// entities/model/types/user.ts

export interface User {
  id: string;
  username: string;
}

// interface для state
export interface UserSchema{
  authData?: User
}
