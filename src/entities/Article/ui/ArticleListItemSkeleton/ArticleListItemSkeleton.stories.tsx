// entities/Article/ui/ArticleListItem/ArticleListItemSkeleton.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton';

export default {
  title: 'shared/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  argTypes: { backgroundColor: { color: 'color' } },
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => (
  <ArticleListItemSkeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
