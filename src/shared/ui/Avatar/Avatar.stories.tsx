// shared/ui/Avatar/Avatar.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "shared/ui/Avatar/Avatar";
import AvatarImg from "./Avatar.jpg";

export default {
  title: "shared/Avatar", // название stories
  component: Avatar, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 100,
  src: AvatarImg,
  alt: "",
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarImg,
  alt: "",
};
