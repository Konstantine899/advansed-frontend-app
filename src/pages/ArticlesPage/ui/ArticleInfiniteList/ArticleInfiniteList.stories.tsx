import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleInfiniteList } from "./ArticleInfiniteList";

export default {
    title: "pages/ArticleInfiniteList/ArticleInfiniteList",
    component: ArticleInfiniteList,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
