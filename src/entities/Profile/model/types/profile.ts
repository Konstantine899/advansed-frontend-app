// entities/Profile/model/types/profile.ts
import { Country, Currency } from "shared/const/common";

export interface Profile {
  firstname: string;
  lastname: string;
  age: 33;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string; // при редактировании профиля возможна
  readonly: boolean; // состояние доступен ли пользователь для редактирования или он в режиме только для чтения
}
