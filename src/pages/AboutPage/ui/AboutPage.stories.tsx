// src/pages/ui/AboutPage/AboutPage.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AboutPage from "./AboutPage";

export default {
  title: "pages/AboutPage", // название stories
  component: AboutPage, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => (
  <AboutPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
