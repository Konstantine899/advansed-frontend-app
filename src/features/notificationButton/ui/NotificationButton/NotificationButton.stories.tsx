// features/notificationButton/ui/NotificationButton/NotificationButton.stories.tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationButton } from './NotificationButton';

export default {
  title: 'features/notificationButton/NotificationButton',
  component: NotificationButton,
  argTypes: { backgroundColor: { color: 'color' } },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
  <NotificationButton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
