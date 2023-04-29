describe('Router E2E', () => {
  it('should navigate between pages', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Home');
    cy.visit('/form');
    cy.get('h1').should('have.text', 'Form Page');
    cy.visit('/favorites');
    cy.get('h1').should('have.text', 'Favorites');
    cy.visit('/something');
    cy.contains("This page doesn't exist");
  });
});
