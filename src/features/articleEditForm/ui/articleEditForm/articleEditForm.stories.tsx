import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleEditForm } from "./articleEditForm";

export default {
  title: "shared/articleEditForm",
  component: ArticleEditForm,
  argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof ArticleEditForm>;

const Template: ComponentStory<typeof ArticleEditForm> = (args) => (
  <ArticleEditForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
