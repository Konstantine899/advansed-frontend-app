// cypress/support/commands/rating.ts

export const setRating = (starsCount: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId(`StarRating.${starsCount}`).click(); // выбираем количество звезд и кликаем
    // После чего открывается модальное окно
    cy.getByTestId('RatingCard.Input').type(feedback); // вводим в input отзыв пользователя
    cy.getByTestId('RatingCard.Send').click(); // Нажимаем на кнопку отправить
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starsCount: number, feedback: string): Chainable<void>
        }
    }
}
