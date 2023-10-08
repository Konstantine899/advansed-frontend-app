// shared/ui/ListBox/ListBox.stories.tsx

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: { backgroundColor: { color: 'color' } },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  // @ts-ignore
  <ListBox {...args} />
);

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: '1',
  items: [
    { content: '1111111111111', value: '1' },
    { content: '2222222222222', value: '2' },
    { content: '3333333333333', value: '3' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: '1',
  items: [
    { content: '1111111111111', value: '1' },
    { content: '2222222222222', value: '2' },
    { content: '3333333333333', value: '3' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: '1',
  items: [
    { content: '1111111111111', value: '1' },
    { content: '2222222222222', value: '2' },
    { content: '3333333333333', value: '3' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: '1',
  items: [
    { content: '1111111111111', value: '1' },
    { content: '2222222222222', value: '2' },
    { content: '3333333333333', value: '3' },
  ],
};
