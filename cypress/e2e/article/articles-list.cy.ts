// cypress/e2e/article/articles-list.cy.ts
describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('Статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist'); // проверяем что список отрисовался
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
