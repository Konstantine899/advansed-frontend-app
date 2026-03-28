# Деплой API на Vercel из монрепозитория

## Инструкция:

### 1. Подготовка репозитория
- Все файлы API уже находятся в папке `api/`
- Конфигурация Vercel в `vercel.json`

### 2. Деплой на Vercel
1. **Зайдите на [Vercel.com](https://vercel.com)**
2. **Войдите через GitHub**
3. **Нажмите "New Project"**
4. **Импортируйте репозиторий:** `Konstantine899/advansed-frontend-app`
5. **Настройки деплоя:**
   - Framework Preset: "Other"
   - Root Directory: "." (корень)
   - Build Command: `cd api && npm install`
   - Output Directory: (оставьте пустым)
   - Install Command: (оставьте пустым)

6. **Нажмите "Deploy"**

### 3. Получение API URL
После деплоя Vercel предоставит URL вида:
- `https://advansed-frontend-app.vercel.app`

### 4. Обновление фронтенда
После получения URL обновите `package.json`:
```json
"build:prod": "webpack --env mode=production apiUrl=https://ВАШ-НОВЫЙ-URL.vercel.app"
```

### 5. Тестирование API
Проверьте эндпоинты:
- `GET https://ваш-api.vercel.app/articles`
- `POST https://ваш-api.vercel.app/login`
- `GET https://ваш-api.vercel.app/health`

## Важные моменты:
- API будет доступен по корневому URL Vercel
- Все запросы перенаправляются в `api/index.js`
- База данных в памяти (данные сохраняются в сессии)
- Для production используйте реальную БД

## Для демонстрации работодателю:
1. Покажите работающий API на Vercel
2. Покажите фронтенд на GitHub Pages
3. Покажите полный CRUD
4. Покажите авторизацию