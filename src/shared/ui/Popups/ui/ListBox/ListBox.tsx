// shared/ui/Popups/ui/ListBox/ListBox.tsx
import { Fragment, ReactNode } from "react";
import { Listbox as HListBox } from "@headlessui/react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { mapDirectionClass } from "../styles/consts";
import { HStack } from "../../../Stack";
import { Button } from "../../../Button/Button";
import cls from "./ListBox.module.scss";
import popupCls from "../styles/popup.module.scss";
import { DropDownDirection } from "@/shared/types/ui";

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  direction?: DropDownDirection;
  label?: string;
  onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = "bottom left",
    label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && (
        <span
          className={classNames(cls.label, { [cls.readonly]: readonly }, [])}
        >
          {`${label}>`}
        </span>
      )}
      <HListBox
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        as="div"
        value={value}
        disabled={readonly}
        onChange={onChange}
      >
        <HListBox.Button disabled={readonly} className={popupCls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
