// shared/ui/Select/Select.tsx
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";

export interface SelectOption {
  value: string;
  content: string; // текст внутри select
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[]; // ожидаем массив опций
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  };

  const optionList = useMemo(
    () =>
      options?.map((element) => (
        <option
          className={cls.option}
          value={element.value}
          key={element.value}
        >
          {element.content}
        </option>
      )),
    [options]
  );

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
});
