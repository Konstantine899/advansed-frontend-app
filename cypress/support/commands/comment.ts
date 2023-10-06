// cypress/support/commands/comment.ts

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text); // Получаю input и вводим текст, который получили аргументом
    cy.getByTestId('AddCommentForm.Button').click(); // Получаю кнопку и кликаю на ее
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>
        }
    }
}
