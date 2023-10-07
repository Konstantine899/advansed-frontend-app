// cypress/e2e/article/article-details.cy.ts

let currentArticleId: string;

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Отображение содержимого статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist'); // проверяем что элемент существует
    });
    it('Отображение списка рекомендуемых статей', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist'); // проверяем что элемент существует
    });
    it('Оставляем комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist'); // ждем пока статья прогрузится
        cy.getByTestId('AddCommentForm').scrollIntoView(); // скролим к форме добавления комментария
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should("have.length", 1);
    });
    it('Ставим оценку статье', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info').should('exist'); // ждем пока статья прогрузится
        cy.getByTestId('RatingCard').scrollIntoView(); // скролим к карточке rating
        cy.setRating(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
