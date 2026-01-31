/// <reference types="cypress" />

describe('Login', () => {
  it('should open register page', () => {
    cy.visit('https://dev.card4games.com/?key=C4G_X9mK7pL2nQ5vB8rT4wY1aZ6cF3jH0sD_2025_DEV_ACCESS')
    cy.contains('Login').should('be.visible')
   cy.get('[name="parentlogin"]').click();
   cy.get('[name="signup"]').click();
   cy.get(':nth-child(1) > .p-inputgroup > .p-inputtext').type("shady")
   cy.get(':nth-child(2) > .p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
   cy.get('.p-inputgroup > .position-relative > .p-inputtext').type("Shady112200#")
   cy.get('[type="tel"]').type("1236547896")
   cy.get('.p-dropdown-trigger').click();
   cy.get('#pn_id_17_1 > .ng-star-inserted').click();
   cy.get('[name="submit"] > .mb-3').click();
  })
})
