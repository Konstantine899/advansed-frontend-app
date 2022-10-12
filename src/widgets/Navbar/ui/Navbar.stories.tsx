// src/widgets/Navbar/Navbar.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "widgets/Navbar";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "widget/Navbar", // название stories
  component: Navbar, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
