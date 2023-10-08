// shared/ui/Popups/ui/Popover/Popover.stories.tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: { backgroundColor: { color: 'color' } },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
