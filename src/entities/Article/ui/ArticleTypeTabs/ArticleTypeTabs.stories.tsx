// entities/ui/ArticleTypeTabs/ArticleTypeTabs.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleTypeTabs } from "./ArticleTypeTabs";

export default {
    title: "entities/Article/ArticleTypeTabs",
    component: ArticleTypeTabs,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
