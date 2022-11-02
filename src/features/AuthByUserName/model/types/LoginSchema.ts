// features/AuthByUserName/model/types/LoginSchema.ts
export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}
