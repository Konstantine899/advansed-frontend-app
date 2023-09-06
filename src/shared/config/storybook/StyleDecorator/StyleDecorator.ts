// shared/storybook/StyleDecorator/StyleDecorator.ts
import "@/app/styles/index.scss";
import { Story } from "@storybook/react";

export const StyleDecorator = (story: () => Story) => story();

/* Два варианта, что декоратор может вернуть
 * 1. story() соответственно вызов этой функции
 * 2. Если в качестве типа мы просто указали бы Story, а не функцию, то возвращаемое значение было бы компонент <Story/>
 *  */
