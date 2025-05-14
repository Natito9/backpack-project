describe('Responsiveness', () => {
  const viewports = [
    { device: 'iphone-6', width: 375, height: 667 },
    { device: 'ipad-2', width: 768, height: 1024 },
    { device: 'macbook-15', width: 1440, height: 900 }
  ];

  viewports.forEach(({ device, width, height }) => {
    it(`displays nav, section mission, section contact and footer on ${device}`, () => {
      cy.viewport(width, height);
      cy.visit('https://backpack-studios.vercel.app/');
      cy.get('nav').should('be.visible');
      cy.get('#mission').should('be.visible');
      cy.get('#contact').should('be.visible');
      cy.get('footer').should('be.visible');
    });
  });
});
