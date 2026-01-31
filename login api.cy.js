/// <reference types="cypress" />

describe('Auth API', () => {
  it('signin should return 201', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-dev.card4games.com/v1/auth/signin',
      body: {
        email: 'vilalo@fxzig.com',
        password: 'Shady112200#',
      },
    }).then((res) => {
      expect(res.status).to.eq(201)
      cy.log(JSON.stringify(res.body))
    })
  })
})
