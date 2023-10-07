// cypress/e2e/article/articles-list.cy.ts
describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('Статьи успешно подгружаются stab(fixture)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist'); // проверяем что список отрисовался
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Тест который падает', () => {
        cy.getByTestId('asdfasdfasd').should('exist');
    });
});
