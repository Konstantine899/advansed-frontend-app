// shared/storybook/RouterDecorator/RouterDecorator.ts
import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>{story()}</BrowserRouter>
);
