// entities/Profile/model/types/profile.ts
import { Currency } from "entities/Currency/modal/types/currency";
import { Country } from "entities/Country/model/types/country";

export interface Profile {
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile; // храним полученные данные с сервера
  form?: Profile; // храним измененное пользователем значение
  isLoading: boolean;
  error?: string; // при редактировании профиля возможна
  readonly: boolean; // состояние доступен ли пользователь для редактирования или он в режиме только для чтения
}
