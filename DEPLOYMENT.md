# Деплой на GitHub Pages

## Настройка

Проект настроен для автоматического деплоя на GitHub Pages при пуше в ветки `main` или `master`.

## Скрипты

- `npm run build:vite` - сборка проекта через Vite
- `npm run predeploy` - подготовка к деплою (сборка)
- `npm run deploy` - деплой на GitHub Pages

## Автоматический деплой (GitHub Actions)

При каждом пуше в `main`/`master` автоматически:
1. Устанавливаются зависимости
2. Собирается проект
3. Деплоится на GitHub Pages

Workflow файл: `.github/workflows/deploy.yml`

## Ручной деплой

```bash
# Собрать проект
npm run build:vite

# Задеплоить
npm run deploy

# Или одной командой
npm run predeploy && npm run deploy
```

## Настройка base path

Base path настроен в `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' 
  ? '/advansed-frontend-app/' 
  : '/',
```

Если меняется имя репозитория, нужно обновить этот путь.

## Доступ к сайту

После деплоя сайт будет доступен по адресу:
`https://konstantine899.github.io/advansed-frontend-app/`

## Локальная проверка

```bash
# Собрать и запустить локальный сервер
npm run build:vite
npx serve dist
```

## Решение проблем

### 404 ошибка при переходе по прямым ссылкам
GitHub Pages не поддерживает SPA роутинг из коробки. Решения:
1. Использовать HashRouter вместо BrowserRouter
2. Добавить файл `404.html` с редиректом
3. Настроить кастомный домен

### Неправильный base path
Убедитесь, что base path в `vite.config.ts` совпадает с именем репозитория.

### Ошибки сборки
Проверьте логи GitHub Actions в репозитории: Actions → Deploy to GitHub Pages