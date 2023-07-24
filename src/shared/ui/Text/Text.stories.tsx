// shared/ui/Text/Text.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextSize, TextTheme } from "./Text";

export default {
  title: "shared/Text", // название stories
  component: Text, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// Использование всех props
export const Primary = Template.bind({});
Primary.args = {
  title: "Title",
  text: "Text Text Text Text Text Text",
};

// Тема ERROR
export const Error = Template.bind({});
Error.args = {
  title: "Title",
  text: "Text Text Text Text Text Text",
  theme: TextTheme.ERROR,
};

// использование только с title
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title",
};

// использование только с text
export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Text Text Text Text Text Text",
};

// Использование всех props
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title",
  text: "Text Text Text Text Text Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

// использование только с title
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

// использование только с text
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Text Text Text Text Text Text",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

// Размеры
export const SizeS = Template.bind({});
SizeS.args = {
  title: 'Title Lorem',
  text: "Text Text Text Text Text Text",
  size: TextSize.S,
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: 'Title Lorem',
  text: "Text Text Text Text Text Text",
  size: TextSize.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title Lorem',
  text: "Text Text Text Text Text Text",
  size: TextSize.L,
};
