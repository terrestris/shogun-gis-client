describe('Header', () => {
  beforeEach(() => {
    if (Cypress.env('ENV') == 'dev') {
      cy.visit(`http://${Cypress.env('HOST')}/`);
    } else {
      cy.loginAsAdmin();
      cy.visit(`https://${Cypress.env('HOST')}/client/?applicationId=${Cypress.env('ID')}`);  
    }
    cy.get('button[aria-label="Accept cookies"]', { timeout: 10000 })
      .should('be.visible')
      .click();
    cy.get('#map', { timeout: 10000 })
      .should('be.visible')
  });

  it('checks environment variables', () => {
    cy.log('ENV:', Cypress.env('ENV'));
    cy.log('HOST:', Cypress.env('HOST'));
  });

  it('should have a complete header', () => {
    cy.get('[aria-label="logo"]').should('be.visible');
    cy.get('[aria-label="search-field"]').should('be.visible');
    cy.get('[aria-label="documentation-button"]').should('be.visible');

    if (Cypress.env('ENV') == 'dev') {
      cy.get('[aria-label="user-menu"]').should('be.visible');
    }
  });
});

