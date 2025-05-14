describe('Accessibility', () => {
  it('Has no detectable a11y violations on load', () => {
    cy.visit('https://backpack-studios.vercel.app/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
