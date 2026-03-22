// src/widget/Navbar/ui/Navbar.tsx
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUserName';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { getRouteArticleCreate } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

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

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          theme={TextTheme.INVERTED}
          className={cls.appName}
          title={t('Example App')}
        />
        <AppLink
          to={getRouteArticleCreate()}
          className={cls.createBtn}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
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
        {t('ВОЙТИ')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});

Navbar.displayName = 'Navbar';
