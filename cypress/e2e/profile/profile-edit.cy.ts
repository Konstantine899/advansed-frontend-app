// cypress/e2e/profile/profile-edit.cy.ts

let profileId: string;

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'testuser');
    });
    it('Редактирование профиля', () => {
        const newFirstName = 'new firstname';
        const newLastName = 'new lastname';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
});
