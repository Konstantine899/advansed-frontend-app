// cypress/support/commands/article.ts

import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Javascript news 2022',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: ['IT'],
  blocks: [],
};

export const createArticle = (article?: Article) => cy
  .request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'asd' },
    body: article ?? defaultArticle,
  })
  .then((response) => response.body);

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asd' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;

      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
