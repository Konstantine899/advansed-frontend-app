// cypress/e2e/common/routing.cy.ts
import { selectByTestId } from '../helpers/selectByTestId';

describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Переход открывает страницу пользователя', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist'); // redirect на main page
    });
    it('Переход открывает не существующий маршрут', () => {
      cy.visit('/dddddddddddd');
      cy.get(selectByTestId('NotFoundPage')).should('exist'); // redirect на main page
    });
  });
  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });
    it('Переход открывает страницу пользователя', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist'); // redirect на main page
    });
    it('Переход открывает страницу списка статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist'); // redirect на main page
    });
  });
});
