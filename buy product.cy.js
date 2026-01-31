/// <reference types="cypress" />

describe('Login', () => {
  it('should open login page', () => {
    cy.visit('https://dev.card4games.com/?key=C4G_X9mK7pL2nQ5vB8rT4wY1aZ6cF3jH0sD_2025_DEV_ACCESS')
    cy.get('[name="parentlogin"]').click();
    cy.get('[name="login"]').click();
    cy.get('.p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
   cy.get('.position-relative > .p-inputtext').type("Shady112200#")
   cy.get('[name="login"] > .mb-3').click();
   cy.get('.item > .dropdown-toggle > .pi').click();
   cy.get('#pn_id_32 > .p-dropdown-trigger').click();
   cy.get('#pn_id_32 > .p-dropdown-trigger').click();
   cy.get('#pn_id_32 > .p-dropdown-trigger').click();
   cy.get('#pn_id_32_3 > .d-flex > span').click();
   cy.get('.btn').click();
   cy.get(':nth-child(5) > a > p').click();
   cy.get('#category-2 > .item-slider > figure > img').click();
   cy.get('.m-0 > .img-category').click();
   cy.get('[name="buy"]').click();
   cy.get('#pn_id_44_content > .row > :nth-child(1) > .SAR-currency > .d-flex').click();
   cy.scrollTo(0, 2000)
   cy.get('.card-info > .col-12 > [name="pay"]').click();
  })
})