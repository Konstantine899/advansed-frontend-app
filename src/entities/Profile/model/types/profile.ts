// entities/Profile/model/types/profile.ts
import { Currency } from "entities/Currency/modal/types/currency";
import { Country } from "entities/Country/model/types/country";

// Перечисления валидационных ошибок
export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA", // когда не корректное имя или фамилия
  INCORRECT_AGE = "INCORRECT_AGE", // не корректный возраст
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY", // это у нас select и можно было не добавлять
  NO_DATA = "NO_DATA", // нет данных
  SERVER_ERROR = "SERVER_ERROR",
}

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
  validateErrors?: ValidateProfileError[]; // валидационных ошибок может быть несколько по этому массив
}
