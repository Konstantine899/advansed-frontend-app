// pages/ProfilePage/ui/ProfilePage.stories.tsx
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import Avatar from "@/shared/assets/tests/Avatar.jpg";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import ProfilePage from "./ProfilePage";
import { Theme } from "@/shared/const/theme";

export default {
  title: "pages/ProfilePage/ProfilePage", // название stories
  component: ProfilePage, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
 profile: {
    form: {
      avatar: Avatar,
      username: "admin",
      firstname: 'Konstantin',
      lastname: 'Atroshchenko',
      age: 33,
      country: Country.Belarus,
      city: 'Vitebsk',
      currency: Currency.BYN
    },
  }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      avatar: Avatar,
      username: "admin",
      firstname: 'Konstantin',
      lastname: 'Atroshchenko',
      age: 33,
      country: Country.Belarus,
      city: 'Vitebsk',
      currency: Currency.BYN
    },
  }
})];
