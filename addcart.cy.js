/// <reference types="cypress" />

describe('Login', () => {
  it('should open login page', () => {
    cy.visit('https://dev.card4games.com/?key=C4G_X9mK7pL2nQ5vB8rT4wY1aZ6cF3jH0sD_2025_DEV_ACCESS')
    cy.get('[name="parentlogin"]').click();
    cy.get('[name="login"]').click();
    cy.get('.p-inputgroup > .p-inputtext').type("vilalo@fxzig.com")
   cy.get('.position-relative > .p-inputtext').type("Shady112200#")
   cy.get('[name="login"] > .mb-3').click();
   cy.get(':nth-child(5) > a > p').click();
   cy.get('#category-2 > .item-slider > figure > img').click();
   cy.get('.m-0 > .img-category').click();
   cy.get('[name="addcart"]').click();
   cy.get('.shop > .dropdown-toggle > .pi').click();
      cy.get('[name="view_cart"]').click();
  })
})
