// shared/ui/Modal/Modal.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { Modal } from "./Modal";

export default {
  title: "shared/Modal", // название stories
  component: Modal, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true, // потому что по умолчанию false и в storybook не отображается
  children: "lorem100",
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true, // потому что по умолчанию false и в storybook не отображается
  children: "lorem100",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
