// entities/Country/ui/CountrySelect/CountrySelect.tsx
// entities/Currency/ui//CurrencySelect/CurrencySelect.tsx
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo } from "react";
import { Country } from "../../model/types/country";

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
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <Select
      className={classNames("", {}, [className])}
      label={t("Укажите страну")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
