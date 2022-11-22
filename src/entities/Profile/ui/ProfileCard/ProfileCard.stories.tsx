// entities/Profile/ui/ProfileCard/ProfileCard.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import Avatar from 'shared/assets/tests/Avatar.jpg';
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard", // название stories
    component: ProfileCard, // компонент с которым мы работаем указываем здесь
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        avatar: Avatar,
        username: "admin",
        firstname: 'Konstantin',
        lastname: 'Atroshchenko',
        age: 33,
        country: Country.Belarus,
        city: 'Vitebsk',
        currency: Currency.BYN
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error'
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};
