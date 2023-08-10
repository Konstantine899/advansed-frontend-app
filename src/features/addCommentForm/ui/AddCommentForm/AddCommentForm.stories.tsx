import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action, } from "@storybook/addon-actions";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import AddCommentForm from "./AddCommentForm";

export default {
  title: "features/AddCommentForm/AddCommentForm",
  component: AddCommentForm,
  argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: action(`onSendComment`)
};

Normal.decorators = [StoreDecorator({})];
