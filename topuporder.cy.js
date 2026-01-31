/// <reference types="cypress" />

describe('Login', () => {
  it('should open login page', () => {
 cy.visit('https://dev.card4games.com/?key=C4G_X9mK7pL2nQ5vB8rT4wY1aZ6cF3jH0sD_2025_DEV_ACCESS')
    cy.get('[name="parentlogin"]').click();
    cy.get('[name="login"]').click();
    cy.get('.p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
   cy.get('.position-relative > .p-inputtext').type("Shady112200#")
   cy.get('[name="login"] > .mb-3').click();
 cy.get('.user > .dropdown-toggle > .ng-star-inserted').click();
 cy.get('.user-list > .ng-star-inserted > .pi').click();
 cy.get('.btn-outline-light').click();
 cy.get('.p-inputtext').type("5000")
 cy.scrollTo(0, 500)     // ينزل 500px
 cy.get('#pn_id_41_content > .row > :nth-child(6) > .cart-wallet > .d-flex > .currency').click();
   cy.scrollTo(0,1800)//بينزل px1800
   cy.get('.col-12 > .btn-main').click();

  })
})
