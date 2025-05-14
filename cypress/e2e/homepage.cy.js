describe('Backpack Studios Homepage', () => {
  beforeEach(() => {
    cy.visit('https://backpack-studios.vercel.app/');
  });

  it('displays key UI sections correctly', () => {
    // Check essential always-visible elements
    cy.get('nav').should('be.visible');
    cy.get('footer').should('be.visible');

    // Scroll and check hero section
    cy.get('#hero').scrollIntoView().should('be.visible');
    cy.contains(/Backpack Studios/i).should('exist');

    // Scroll to and verify "Our Mission"
    cy.get('#mission').scrollIntoView().should('be.visible');
    cy.contains(/Our Mission/i).should('be.visible');

    // Scroll to and verify "Features" section
    cy.get('#features').scrollIntoView().should('be.visible');
    cy.contains(/Features/i).should('be.visible');

    // Scroll to and verify "Meet Emmo"
    cy.get('#emmo').scrollIntoView().should('be.visible');
    cy.contains(/Meet Emmo/i).should('be.visible');

    // Scroll to and verify "Contact"
    cy.get('#contact').scrollIntoView().should('be.visible');
    cy.contains(/Get in Touch/i).should('be.visible');
  });
});
