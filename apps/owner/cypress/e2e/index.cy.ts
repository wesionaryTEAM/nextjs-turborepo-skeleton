/// <reference types="cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should find Next App 2', () => {
    cy.get('h3').contains('Next App 2')
  })
})
