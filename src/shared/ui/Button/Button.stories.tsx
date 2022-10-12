// shared/ui/Button/Button.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "./Button";

export default {
  title: "shared/Button", // название stories
  component: Button, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
};
// Подключаю ThemeDecorator
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Text",
  theme: ThemeButton.CLEAR,
};
// Подключаю ThemeDecorator
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};

// Подключаю ThemeDecorator
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
