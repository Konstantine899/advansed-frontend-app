// src/widget/Navbar/ui/Navbar.tsx
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.link}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                Главная Страница
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                О Сайте
            </AppLink>
        </div>
    </div>
);
