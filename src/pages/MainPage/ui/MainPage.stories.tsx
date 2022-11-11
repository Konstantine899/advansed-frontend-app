// src/pages/ui/MainPage/MainPage.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import MainPage from "./MainPage";

export default {
  title: "pages/MainPage", // название stories
  component: MainPage, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
