// widgets/Sidebar/model/items.ts
import React from "react";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "widgets/assets/icons/about-20-20.svg";
import MainIcon from "widgets/assets/icons/main-20-20.svg";
import ProfileIcon from "widgets/assets/icons/profile-20-20.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

// Создаю массив конфигурации items
export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "Главная Страница",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "О Сайте",
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: "Профиль пользователя",
  },
];
