describe('Backpack Studios Homepage', () => {
  it('loads successfully and displays the main sections', () => {
    cy.visit('https://backpack-studios.vercel.app/');

    // Navbar and footer are usually visible
    cy.get('nav').should('be.visible');
    cy.get('footer').should('be.visible');

    // Scroll to "Our Mission" and "Meet Emmo" before asserting visibility
    cy.contains('Our Mission').scrollIntoView().should('be.visible');
    cy.contains('Meet Emmo').scrollIntoView().should('be.visible');
  });
});
 

//304 Not Modified is a standard HTTP response indicating that the browser can use a cached copy of a resource (like an image, CSS, or JS file)
