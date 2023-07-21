// pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData); // получаю данные авторизованного пользователя
  const profileData = useSelector(getProfileData); // Получаю данные просматриваемого профиля пользователя
  const canEdit = authData?.id === profileData?.id; // Проверка, совпадают ли идентификаторы авторизованного пользователя и профиля пользователя

  // Функция разрешающая редактирование
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  // Функция отмены редактирования
  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" max className={classNames("", {}, [className])}>
      <Text title={t("Профиль")} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t("Сохранить")}
              </Button>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t("Отменить")}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
};
