// entities/Currency/ui//CurrencySelect/CurrencySelect.tsx
import { ListBox } from '@/shared/ui/Popups';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Ukraine, content: Country.Ukraine },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.USD, content: Country.USD },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className, value, onChange, readonly
  } = props;

  const { t } = useTranslation('profile'); // создаю новое пространство имен

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <ListBox
      className={className}
      items={options}
      value={value}
      defaultValue={t('Укажите страну')}
      label={t('Укажите страну')}
      readonly={readonly}
      direction="top right"
      onChange={onChangeHandler}
    />
  );
});

CountrySelect.displayName = 'CountrySelect';
