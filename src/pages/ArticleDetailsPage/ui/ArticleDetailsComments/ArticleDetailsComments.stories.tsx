// pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleDetailsComments } from "./ArticleDetailsComments";

export default {
    title: "pages/ArticleDetailsComments/ArticleDetailsComments",
    component: ArticleDetailsComments,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
