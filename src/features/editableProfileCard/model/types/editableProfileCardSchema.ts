// features/editableProfileCard/model/types/editableProfileCardSchema.ts

import { Profile } from "entities/Profile";
import { ValidateProfileError } from "../../model/consts/consts";

export interface ProfileSchema {
  data?: Profile; // храним полученные данные с сервера
  form?: Profile; // храним измененное пользователем значение
  isLoading?: boolean;
  error?: string; // при редактировании профиля возможна
  readonly: boolean; // состояние доступен ли пользователь для редактирования или он в режиме только для чтения
  validateErrors?: ValidateProfileError[]; // валидационных ошибок может быть несколько по этому массив
}
