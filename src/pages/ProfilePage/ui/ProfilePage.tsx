// pages/ProfilePage/ui/ProfilePage.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLouder/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileForm,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ProfilePageHeader } from "../ui/ProfilePageHeader/ProfilePageHeader";
import {
  getProfileError,
  getProfileIsLoading,
} from "../../../entities/Profile";
import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = { profile: profileReducer };

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      const regex = /^[0-9]*$/;
      const verificationNumber = regex.test(value || "");
      if (verificationNumber) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
      }
    },
    [dispatch]
  );

  // Функция изменения валюты
  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  // Функция изменения Страны
  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard
          data={formData}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage; // Используется для асинхронных компонентов
