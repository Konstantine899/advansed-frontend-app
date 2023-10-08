// cypress/support/commands/profile.ts

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
  method: 'PUT',
  url: `http://localhost:8000/profile/${profileId}`,
  headers: { Authorization: 'asd' },
  body: {
    id: '4',
    firstname: 'testuser',
    lastname: 'testuser',
    age: 33,
    currency: 'BYN',
    country: 'Belarus',
    city: 'Vitebsk',
    username: 'admin',
    avatar: 'https://www.pngarts.com/files/3/Avatar-PNG-Pic.png',
  },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;

      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
