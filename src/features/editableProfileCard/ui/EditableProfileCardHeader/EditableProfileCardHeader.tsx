// features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader.tsx
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text } from "@/shared/ui/Text";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "@/entities/User";
import { HStack } from "@/shared/ui/Stack";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
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
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t("Редактировать")}
              </Button>
            ) : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t("Сохранить")}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t("Отменить")}
                </Button>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    );
  }
);
