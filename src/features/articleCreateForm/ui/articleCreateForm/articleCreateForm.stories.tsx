import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleCreateForm } from './articleCreateForm';

export default {
  title: 'features/articleCreateForm/articleCreateForm',
  component: ArticleCreateForm,
  argTypes: { backgroundColor: { color: 'color' } },
} as ComponentMeta<typeof ArticleCreateForm>;

const Template: ComponentStory<typeof ArticleCreateForm> = (args) => (
  <ArticleCreateForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
