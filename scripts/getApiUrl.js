#!/usr/bin/env node

// Скрипт для определения API URL в зависимости от окружения
const API_URLS = {
  development: 'http://localhost:8000',
  production: 'https://advansed-frontend-app-xry5.vercel.app',
  test: '',
  storybook: 'https://testapi.com',
};

// Получаем аргументы командной строки
const args = process.argv.slice(2);
const mode =
  args.find((arg) => arg.startsWith('mode='))?.split('=')[1] || 'development';

// Определяем API URL
let apiUrl = API_URLS[mode] || API_URLS.development;

// Если передали кастомный URL, используем его
const customApiUrl = args
  .find((arg) => arg.startsWith('apiUrl='))
  ?.split('=')[1];
if (customApiUrl) {
  apiUrl = customApiUrl;
}

console.log(apiUrl);
