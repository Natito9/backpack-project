
describe('Waitlist Form', () => {
  it('submits with a valid email and shows confirmation', () => {
    cy.visit('https://backpack-studios.vercel.app/');

    // Fill in the email field (adjust selector as needed)
    cy.get('#waitlist input[type="email"]').type('test@example.com');

    // Submit the form (adjust selector as needed)
    cy.get('form').contains(/join|submit|sign up/i).click();

    // Assert that a success or confirmation message appears
    cy.contains(/thank you|waitlist/i, { timeout: 10000 }).should('be.visible');
  });
});
