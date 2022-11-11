// src/app/types/global.d.ts
declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }

  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare const __IS_DEV__: boolean;
declare const __API__: string;

/* Создаю новый тип который ссылается сам на себя. И использую в файлах stories.
 * Позволяет делать поля state не обязательными
 * тем самым я могу использовать нужные куски state */
type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
