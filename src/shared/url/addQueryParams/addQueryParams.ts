// shared/url/addQueryParams/addQueryParams.ts

export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search); // Строка распарсится и получаем объект вида { search: 'value' } т.е. типа params
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

/*
 * Функция добавления параметров строки запроса
 * @param params
 * */

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState("", "", getQueryParams(params));
}
