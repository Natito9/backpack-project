describe('Responsiveness', () => {
  const viewports = [
    { device: 'iphone-6', width: 375, height: 667 },
    { device: 'ipad-2', width: 768, height: 1024 },
    { device: 'macbook-15', width: 1440, height: 900 }
  ];

  viewports.forEach(({ device, width, height }) => {
    context(`on ${device}`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit('https://backpack-studios.vercel.app/');
      });

      it('shows the navbar', () => {
        cy.get('nav').should('be.visible');
      });

      it('shows the #hero section', () => {
        cy.get('#hero').should('be.visible');
      });

      it('shows the #mission section', () => {
        cy.get('#mission').should('be.visible');
      });

      it('shows the #features section', () => {
        cy.get('#features').should('be.visible');
      });

      it('shows the #emmo section', () => {
        cy.get('#emmo').should('be.visible');
      });

      it('shows the #contact section', () => {
        cy.get('#contact').should('be.visible');
      });

      it('shows the footer', () => {
        cy.get('footer').should('be.visible');
      });

      it('menu toggles on mobile', () => {
        if (width < 768) {
          cy.get('button[aria-label="Toggle menu"]').should('be.visible').click();
          cy.get('a[href="#features"]').should('be.visible');
        } else {
          cy.get('button[aria-label="Toggle menu"]').should('not.be.visible');
        }
      });

      it('waitlist button is visible', () => {
        if (width >= 768) {
          cy.get('a[href="#waitlist"]').should('be.visible');
        } else {
          // On mobile, waitlist button is in the menu
          cy.get('button[aria-label="Toggle menu"]').click();
          cy.get('a[href="#waitlist"]').should('be.visible');
        }
      });
    });
  });
});
