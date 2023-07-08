// src/widget/Navbar/ui/Navbar.tsx
import React, { memo, useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUserName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  // Функция закрывающая модальное окно
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  // Функция открывающая модальное окно
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  // Функция разлогиневания пользователя
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={t(`Example App`)}
        />
        <AppLink
          to={RoutePath.articles_create}
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
        >
          {t(`Создать статью`)}
        </AppLink>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.link}
          onClick={onLogout}
        >
          {t("ВЫЙТИ")}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.link}
        onClick={onShowModal}
      >
        {t("ВОЙТИ")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
