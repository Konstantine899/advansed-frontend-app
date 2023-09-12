// widgets/ThemeSwitcher/ThemeSwitcher.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default {
  title: "widgets/ThemeSwitcher", // название stories
  component: ThemeSwitcher, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
