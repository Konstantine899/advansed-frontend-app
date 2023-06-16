import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: { backgroundColor: { color: "color" } },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    { id: "1", text: "hello world", user: { id: "1", username: "Vasya" } },
    { id: "2", text: "hello world 2", user: { id: "1", username: "Petya" } },
  ],
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
  isLoading: false,
};
