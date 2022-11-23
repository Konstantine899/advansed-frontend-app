// config/build/loaders/buildBabelLoader.ts
import { BuildOptions } from "../types/config";

export function buildBabelLoader(options:BuildOptions) {
const { isDev } = options;
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        { locales: ["ru", "en"], keyAsDefaultValue: true },
                    ],
                    isDev && require.resolve('react-refresh/babel'), /* Если это условие не соблюдается, добавится false
           от этого нужно избавиться. Для этого массив плагинов отфильтруем по Boolean значению.
            Каждый плагин который будет true останется */
                ].filter(Boolean),
            },
        },
    };
}
