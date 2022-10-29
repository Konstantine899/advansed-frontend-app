// features/AuthByUserName/ui/LoginForm/LoginForm.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginForm } from "./LoginForm";

export default {
    title: "features/LoginForm", // название stories
    component: LoginForm, // компонент с которым мы работаем указываем здесь
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
