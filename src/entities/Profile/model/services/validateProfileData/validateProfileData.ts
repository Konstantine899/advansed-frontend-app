// entities/Profile/model/services/validateProfileData/validateProfileData.ts
import { ValidateProfileError, Profile } from "entities/Profile/model/types/profile";

// eslint-disable-next-line consistent-return
export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        firstname, lastname, age, country
    } = profile;

    const errors: ValidateProfileError[] = [];

    // Проверяем на отсутствие полей
    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    // Проверка на отсутствие age или же оно не является целочисленным
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    // Проверяем на отсутствие country
    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors; // по итогу из функции возвращаем массив ошибок
};
