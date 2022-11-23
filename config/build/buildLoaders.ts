// config/build/buildLoaders.ts
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woof|woof2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);

  const cssLoaders = buildCssLoader(isDev);

  // если не используем typescript -нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [babelLoader, svgLoader, fileLoader, typescriptLoader, cssLoaders];
}
