// entities/Currency/ui//CurrencySelect/CurrencySelect.tsx
import { ListBox } from '@/shared/ui/Popups';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../modal/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.BYN, content: Currency.BYN },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.UAH, content: Currency.UAH },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation('profile'); // создаю новое пространство имен

  const onChangeHandler = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <ListBox
      className={className}
      value={value}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      items={options}
      readonly={readonly}
      direction="top right"
      onChange={onChangeHandler}
    />
  );
});

CurrencySelect.displayName = 'CurrencySelect';
