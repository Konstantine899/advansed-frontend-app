// features/editableProfileCard/model/consts/consts.ts
// Перечисления валидационных ошибок
export enum ValidateProfileError {
    INCORRECT_USER_DATA = "INCORRECT_USER_DATA", // когда не корректное имя или фамилия
    INCORRECT_AGE = "INCORRECT_AGE", // не корректный возраст
    INCORRECT_COUNTRY = "INCORRECT_COUNTRY", // это у нас select и можно было не добавлять
    NO_DATA = "NO_DATA", // нет данных
    SERVER_ERROR = "SERVER_ERROR",
}
