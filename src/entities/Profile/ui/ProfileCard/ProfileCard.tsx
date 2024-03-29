// entities/Profile/ui/ProfileCard/ProfileCard.tsx
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { CurrencySelect, Currency } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value?: Currency) => void;
  onChangeCountry?: (value?: Country) => void;
  size?: number;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
    size = 100,
  } = props;
  const { t } = useTranslation('profile'); // создаю новое пространство имен

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods = {
    [cls.editing]: !readonly, // т.е. тогда когда мы находимся в режиме редактирования
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar ? (
        <HStack justify="center" max className={cls.AvatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      ) : (
        <HStack justify="center" max className={cls.AvatarWrapper}>
          <Avatar size={size} fallbackInverted />
        </HStack>
      )}
      <Input
        className={cls.input}
        value={data?.firstname}
        placeholder={t('Ваше имя')}
        onChange={onChangeFirstName}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        placeholder={t('Ваша фамилия')}
        onChange={onChangeLastName}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <Input
        className={cls.input}
        value={data?.age}
        placeholder={t('Ваша возраст')}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid="ProfileCard.age"
      />
      <Input
        className={cls.input}
        value={data?.city}
        placeholder={t('Ваш город')}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.sity"
      />
      <Input
        className={cls.input}
        value={data?.username}
        placeholder={t('Введите имя пользователя')}
        onChange={onChangeUsername}
        readonly={readonly}
        data-testid="ProfileCard.username"
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid="ProfileCard.url"
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        data-testid="ProfileCard.currencyselect"
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        data-testid="ProfileCard.countryselect"
      />
    </VStack>
  );
};
