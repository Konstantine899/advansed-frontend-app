## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:vite - запуск backend + frontend
```

---

## Скрипты

* `npm run start` - запуск frontend проекта на webpack dev server
* `npm run start:vite` - запуск frontend проекта на vite
* `npm run start:dev` - запуск frontend на webpack dev server + backend
* `npm run start:vite` - запуск frontend на vite + backend
* `npm run start:dev:server` - запуск backend сервера
* `npm run build:prod` - сборка в production режиме
* `npm run build:dev` - сборка в development режиме(не минимизированная)
* `npm run lint:ts` - проверка ts файлов линтером
* `npm run lint:ts:fix` - исправление ts файлов линтером
* `npm run lint:scss` - проверка scss файлов style линтером
* `npm run lint:scss:fix` - исправление scss файлов style линтером
* `npm run test:unit` - запуск unit тестов с jest
* `npm run test:ui` - запуск скриншотных тестов с loki
* `npm run test:ui:ok` - подтверждение новых скриншотов
* `npm run test:ui:ci` - запуск скриншотных тестов в CI
* `npm run test:ui:report` - генерация полного отчета для скриншотных тестов 
* `npm run test:ui:json` - генерация json отчета для скриншотных тестов  
* `npm run test:ui:html` - генерация html отчета для скриншотных тестов  
* `npm run storybook` - запуск storybook
* `npm run storybook:build` - запуск storybook билда
* `npm run prepare` - прекоммит хуки
* `npm run generate:slice` - скрипт для генерации FSD слайсов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature Slice Design. Ссылка на документацию - [feature sliced design](https://feature-sliced.design/) 

---

## Работа с переводами

В работе используется библиотека i18next для работы с переводами. Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация [i18next react](https://react.i18next.com/getting-started) 

---

## Тесты

В проекте используется 4 вида тестов:

1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React Testing Library - `npm run test:unit`
3) Скриншотное тестирование с loki - `npm run test:ui`
4) e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/test.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Так же для строгого контроля главных архитектурных принципов используется собственный eslint plugin *eslint-plugin-konstantine899-plugin* который содержит 3 правила.
1) path-cheker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD(например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет autofix

## Запуск линтеров 

* `npm run lint:ts` - проверка ts файлов линтером
* `npm run lint:ts:fix` - исправление ts файлов линтером
* `npm run lint:scss` - проверка scss файлов style линтером
* `npm run lint:scss:fix` - исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/DynamicModuleLouder/DynamicModuleLoader.tsx)

----


## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUserName)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
