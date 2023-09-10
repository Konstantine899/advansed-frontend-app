// shared/ui/StarRating/StarRating.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StarRating } from "./StarRating";

export default {
    title: "shared/StarRating",
    component: StarRating,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
