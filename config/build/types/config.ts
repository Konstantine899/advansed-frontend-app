// build/types/config.ts
export type BuildMode = "production" | "development";

export type BuildPath = {
  entry: string;
  build: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
};

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "frontend" | "jest";
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}
