// config/storybook/webpack.config.ts
import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '', // не интересующие нас поля
    html: '', // не интересующие нас поля
    entry: '', // не интересующие нас поля
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };
  config.resolve!.modules!.push(paths.src); // прокидываем путь до папки с исходным кодом
  config.resolve!.alias = { ...config.resolve!.alias, '@': paths.src }; // Разворачиваем старые aliases и добавляю свой alias.
  config.resolve!.extensions!.push('ts', 'tsx'); // указываю расширения скриншотный файлов для файлов stories
  config.module!.rules!.push(buildCssLoader(true)); // добавляю loader в правила. true будет использоваться только для development

  /* Правила для обработки svg */
  /* rules содержится массив loader-ов. Пробегаюсь по каждому loader и его полю test.
   * В каждом регулярном выражении, которое лежит в поле test, проверяю, содержится ли svg.
   * Если true, данное правило найдено, и я его исключаю, выключаю.
   * Делаю это с помощью поля exclude и передачей в него выражения. В котором описываю то что хочу выключить, исключить */
  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  // Добавляю правило для обработки svg
  config.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.com'), // записываем сюда любое значение
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  return config;
};
