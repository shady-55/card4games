/// <reference types="cypress" />

describe('Auth API', () => {
  it('sign up should return 201', () => {
    cy.request({
      method: 'POST',
      url: 'https://api-dev.card4games.com/v1/auth/signup',
      failOnStatusCode: false, 
      body: {
        name: "Ahmed Mohamed",
  "email": "user@example.com",
  "password": "password123",
  "currency": "EGP",
  "phone": "1234567890",
  "countryCode": "EG",
  "language": "en",
  "fingerprint": "a3f8d9c2b1e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0",
  "fingerprintComponents": {
    "canvas": "data:image/png;base64,...",
    "webglVendor": "Google Inc. (NVIDIA)",
    "screenWidth": 1920
  },
  "fingerprintTimestamp": 1733334567890

      },
    }).then((res) => {
      cy.log(`status=${res.status}`)
      cy.log(JSON.stringify(res.body))
      expect(res.status).to.eq(400)  
    })
  })
})

