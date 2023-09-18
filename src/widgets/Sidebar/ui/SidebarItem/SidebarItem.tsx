// widgets/Sidebar/ui/SidebarItem/SidebarItem.tsx
import { useTranslation } from "react-i18next";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getUserAuthData } from "@/entities/User";
import { SidebarItemType } from "../../model/types/sidebar";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  // Если флаг authOnly навешанный на ссылку true и нет данных о пользователе, то просто не возвращаю ссылку
  if (item.authOnly && !isAuth) {
    return null;
  }

  const mods = {
    [cls.collapsed]: collapsed,
  };

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, mods)}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
