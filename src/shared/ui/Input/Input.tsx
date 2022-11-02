// shared/ui/Input/Input.tsx
import { classNames } from "shared/lib/classNames/classNames";
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import cls from "./Input.module.scss";

/* Исключаю типы стандартных атрибутов value и onChange */
/* Которые позже в interface InputProps переопределяю */
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  // состояние каретки
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus(); // физически добавляем focus на элемент input
    }
  }, [autofocus]);

  // onBlur это когда мы из focus выходим
  const onBlur = () => {
    setIsFocused(false);
  };

  // onFocus когда мы кликаем на input он переходит в состояние focus
  const onFocus = () => {
    setIsFocused(true);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length); // меняю позицию каретки
  };

  const onSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}

      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          {...otherProps}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
        />
        {isFocused && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
});