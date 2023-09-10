// shared/ui/Popups/ui/Dropdown/Dropdown.tsx
import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { DropDownDirection } from "@/shared/types/dropDownDirection";
import { mapDirectionClass } from "../styles/consts";
import { AppLink } from "../../../AppLink/AppLink";
import cls from "./Dropdown.module.scss";
import popupCls from "../styles/popup.module.scss";

export interface DropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

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
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
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
                            <Menu.Item key={`dropdown-key${index}`} as={AppLink} to={item.href}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    /* В противном случае отрисовывою просто кнопку */
                    return (
                        <Menu.Item key={`dropdown-key${index}`} as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
