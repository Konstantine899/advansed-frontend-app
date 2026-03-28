// Конфигурация API URL для разных окружений
export const API_URLS = {
  development: 'http://localhost:8000',
  production: 'https://advansed-frontend-api.vercel.app', // Замените на ваш Vercel URL
  test: '',
  storybook: 'https://testapi.com',
};

// Получаем текущее окружение
export function getApiUrl(env) {
  return API_URLS[env] || API_URLS.development;
}

export default API_URLS;