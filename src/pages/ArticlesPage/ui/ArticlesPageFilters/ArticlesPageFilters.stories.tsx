// pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticlesPageFilters } from "./ArticlesPageFilters";

export default {
    title: "pages/Article/ArticlesPageFilters",
    component: ArticlesPageFilters,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
