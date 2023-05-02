describe('Router E2E', () => {
  it('should navigate between pages', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Home');
    cy.visit('/form');
    cy.get('h1').should('have.text', 'Form Page');
    cy.visit('/about');
    cy.get('h1').should('have.text', 'About Us');
    cy.visit('/something');
    cy.contains("This page doesn't exist");
  });
});
