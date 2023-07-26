// entities/Country/ui/CountrySelect/CountrySelect.tsx
// entities/Currency/ui//CurrencySelect/CurrencySelect.tsx
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";
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
  const {
 className, value, onChange, readonly
} = props;

  const { t } = useTranslation();

  const onChangeHandler = (value: string) => {
    onChange?.(value as Country);
  };

  return (
    <ListBox
      className={className}
      items={options}
      value={value}
      defaultValue="Укажите страну"
      label="Укажите страну"
      readonly={readonly}
      direction="top right"
      onChange={onChangeHandler}
    />
  );
});
