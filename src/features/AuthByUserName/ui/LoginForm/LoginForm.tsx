// features/AuthByUserName/ui/LoginForm/LoginForm.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
 username, password, isLoading, error
} = useSelector(getLoginState); // получаю состояние из state.

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  // Функция обработчик нажатия кнопки
  const onLoginClick = useCallback(() => {
    dispatch(loginByUserName({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t('Не верный username или пароль')} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        autofocus
        placeholder={t("Введите имя пользователя")}
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t("Введите пароль")}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
  );
});
