// config/storybook/preview.js
// preview - предварительный просмотр
import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT)); // default тема приложения
addDecorator(RouterDecorator); // Добавление React-router-dom во все файлы stories
addDecorator(SuspenseDecorator); // Добавление Suspense во все файлы stories
