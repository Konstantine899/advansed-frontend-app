import { Menu } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { Fragment, ReactNode } from "react";
import { DropDownDirection } from "shared/types/dropDownDirection";
import { AppLink } from "../AppLink/AppLink";
import cls from "./Dropdown.module.scss";

export interface DropDownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  "top left": cls.optionsTopLeft,
  "top right": cls.optionsTopRight,
  "bottom left": cls.optionsBottomLeft,
  "bottom right": cls.optionsBottomRight,
};

interface DropdownProps {
  className?: string;
  items: DropDownItem[];
  trigger: ReactNode;
  direction?: DropDownDirection;
}

export function Dropdown(props: DropdownProps) {
  const {
 className, items, trigger, direction = "bottom right"
} = props;
  const menuClasses = [mapDirectionClass[direction]];
  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              className={classNames(cls.item, { [cls.active]: active }, [])}
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );
          /* если в item.href содержится ссылка, то отрисовываю AppLink т.е. кнопку оборачиваю в ссылку */
          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href}>
                {content}
              </Menu.Item>
            );
          }
          /* В противном случае отрисовывою просто кнопку */
          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
