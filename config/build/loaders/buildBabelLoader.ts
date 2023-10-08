// config/build/loaders/buildBabelLoader.ts
import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader(options: BuildBabelLoaderProps) {
  const { isDev, isTsx } = options;
  const isProd = !isDev; // если isDev false значит инвертирую в true. Тем самым подтверждаю что нахожусь в prod режиме
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          ['@babel/plugin-transform-runtime', {}],
          isTsx && isProd && [babelRemovePropsPlugin, { props: ['data-testid'] }],
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
