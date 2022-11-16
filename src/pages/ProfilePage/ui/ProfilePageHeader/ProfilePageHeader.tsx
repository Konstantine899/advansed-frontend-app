// pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

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
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {readonly ? (
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEdit}
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <div>
          <Button
            className={cls.saveBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onSave}
          >
            {t("Сохранить")}
          </Button>
          <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("Отменить")}
          </Button>
        </div>
      )}
    </div>
  );
};
