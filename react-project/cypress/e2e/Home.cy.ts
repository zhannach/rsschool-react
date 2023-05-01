describe('HomePage E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should have input', () => {
    cy.get('input').should('have.value', '');
    cy.get('input').type('Next');
    cy.get('input').should('have.value', 'Next');
  });

  it('should have cards', () => {
    cy.get('img').should('have.length', '9');
  });

  it('should search cards', () => {
    cy.get('input').type('Javascript');
    cy.get('button').click();
    cy.contains('Title: JavaScript');
  });

  it('should open modal window', () => {
    cy.get('img').first().click();
    cy.get('span').last().should('have.text', 'Pages: ');
    cy.get('[data-testid="close-modal"]').click();
    cy.get('input').should('be.visible');
  });

  it('should add to favorites', () => {
    cy.get('img').first().click();
    cy.get('button').last().should('have.text', 'Add');
    cy.get('button').last().click();
    cy.get('[data-testid="close-modal"]').click();
    cy.visit('/favorites');
    cy.get('img').should('be.visible');
    cy.get('img').should('have.length', '1');
    cy.get('button').last().click();
    cy.contains("You haven't added the book to your favorite list yet.");
  });
});
