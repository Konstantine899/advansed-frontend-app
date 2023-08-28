// entities/Notification/ui/NotificationList/NotificationList.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NotificationList } from "./NotificationList";

export default {
    title: "shared/NotificationList",
    component: NotificationList,
    argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
