// features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader.stories.tsx

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

export default {
    title: "features/EditableProfileCardHeader/EditableProfileCardHeader",
    component: EditableProfileCardHeader,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
