// shared/ui/Select/Select.stories.tsx
// shared/ui/Avatar/Avatar.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "shared/Select", // название stories
  component: Select, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Укажите значение",
  options: [
    { value: "1", content: "Первый пункт" },
    { value: "2", content: "второй пункт" },
    { value: "3", content: "Третий пункт" },
    { value: "4", content: "Четвертый пункт" },
  ],
};
