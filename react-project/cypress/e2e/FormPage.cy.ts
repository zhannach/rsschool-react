/// <reference types="cypress" />

describe('FormPage E2E', () => {
  beforeEach(() => {
    cy.visit('/form');
  });
  it('should have a form', () => {
    cy.get('input').should('have.value', '');
    cy.get('input').should('have.length', '7');
    cy.get('button').should('have.text', 'Submit');
  });

  it('validation form', () => {
    cy.get('input[type="text"]').type('Richard Kho');
    cy.get('input[type="text"]').should('have.value', 'Richard Kho');
    cy.get('input[type="radio"]').check('softcover');
    cy.get('input[type="radio"]').should('be.checked');
    cy.contains('Submit').click();
    cy.contains('Field is required');
    cy.get('input[type="text"]').type('w453463');
    cy.contains('Submit').click();
    cy.get('input[type="text"]').should('have.class', '_error_4bzeb_54');
    cy.get('input[type="date"]').type('2024-10-28');
    cy.contains('Submit').click();
    cy.get('input[type="date"]').should('have.class', '_error_4bzeb_54');
    cy.get('input[type="date"]').type('2021-10-28');
    cy.contains('Submit').click();
    cy.get('input[type="date"]').should('have.value', '2021-10-28');
  });
});
