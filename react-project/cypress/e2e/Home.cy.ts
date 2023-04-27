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
    cy.get('img').should('have.length', '30');
  });

  it('should search cards', () => {
    cy.get('input').type('Javascript');
    cy.get('button').click();
    cy.get('h3').last().should('have.text', 'Title: JavaScript Unlocked');
  });

  it('should open modal window', () => {
    cy.get('img').first().click();
    cy.get('span').last().should('have.text', 'Pages: ');
    cy.get('[data-testid="close-modal"]').click();
    cy.get('input').should('be.visible');
  });
});
