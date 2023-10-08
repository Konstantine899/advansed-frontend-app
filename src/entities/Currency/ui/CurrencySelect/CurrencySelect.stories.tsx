// entities/Currency/ui//CurrencySelect/CurrencySelect.stories.tsx
// shared/ui/Select/Select.stories.tsx
// shared/ui/Avatar/Avatar.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect/CurrencySelect', // название stories
  component: CurrencySelect, // компонент с которым мы работаем указываем здесь
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
