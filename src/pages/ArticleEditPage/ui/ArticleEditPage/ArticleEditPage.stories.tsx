// pages/ArticleEditPage/ui/ArticleEditPage/ArticleEditPage.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticleEditPage from "./ArticleEditPage";

export default {
  title: "shared/ArticleEditPage",
  component: ArticleEditPage,
  argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
  <ArticleEditPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
