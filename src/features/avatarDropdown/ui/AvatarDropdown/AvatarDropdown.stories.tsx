// features/avatarDropdown/ui/AvatarDropdown/AvatarDropdown.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AvatarDropdown } from "./AvatarDropdown";

export default {
    title: "features/avatarDropdown/AvatarDropdown",
    component: AvatarDropdown,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
