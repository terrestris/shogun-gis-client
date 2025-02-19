describe('Header', () => {
  beforeEach(() => {
    cy.loginAsAdmin();
    cy.visit(`https://${Cypress.env('HOST')}/client/?applicationId=${Cypress.env('ID')}`);
    cy.get('button[aria-label="Accept cookies"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.get('#map', { timeout: 10000 })
      .should('be.visible')
    cy.contains(Cypress.env('TITLE'));
  });

  it('should have a complete header', () => {
    cy.get('[aria-label="logo"]').should('be.visible');
    cy.get('[aria-label="search-field"]').should('be.visible');
    cy.get('[aria-label="user-menu"]').should('be.visible');
  });
});

