/// <reference types="cypress" />

Cypress.Commands.add('loginAsAdmin', () => {
  cy.session('admin-session', () => {
    cy.visit(`https://${Cypress.env('HOST')}/auth/realms/SHOGun`
      + '/protocol/openid-connect/auth?client_id=shogun-client'
      + `&redirect_uri=https%3A%2F%2F${Cypress.env('HOST')}%2Fclient%2F%3FapplicationId%3D${Cypress.env('ID')}`
      + '&state=9a983abe-3b0c-41cb-9b7e-1d9120956959&response_mode=fragment&response_type'
      + '=code&scope=openid&nonce=72884466-0535-4a24-8c15-9e7f14d88a65');

    cy.get('#username').type(Cypress.env('ADMIN_LOGIN'));
    cy.get('#password').type(Cypress.env('ADMIN_PASSWORD'), { log: false });

    cy.get('input[type="submit"]').should('be.visible').click();

    cy.url().should('include', '/client');
  });
});

