// pages/ProfilePage/ui/ProfilePage.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { DynamicModuleLoader, ReducersList } from "shared/lib/DynamicModuleLouder/DynamicModuleLoader";
import { profileReducer } from "entities/Profile";
import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageProps {
  className?: string;
}

 const ProfilePage = memo((props: ProfilePageProps) => {
     const { className } = props;

     const { t } = useTranslation();

     return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                {t('Профиль пользователя')}
            </div>
        </DynamicModuleLoader>
     );
 });

export default ProfilePage; // Используется для асинхронных компонентов
