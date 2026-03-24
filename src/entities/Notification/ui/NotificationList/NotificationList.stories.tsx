// entities/Notification/ui/NotificationList/NotificationList.stories.tsx
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: { backgroundColor: { color: 'color' } },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})]; // state в redux у нас пустой
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Поставьте лайк и оставьте комментарий',
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Поставьте лайк и оставьте комментарий',
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Поставьте лайк и оставьте комментарий',
        },
      ],
    },
  ],
};
