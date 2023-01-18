const url = 'https://the-internet.herokuapp.com'

describe('web https://the-internet.herokuapp.com test login and logout ', () => {

  it('successfully loads url', () => {
    cy.visit(`${url}/login`)
  })

  it('successfully login', () => {
    cy.visit(`${url}/login`)

    cy.get('#username')
      .type('tomsmith')
      .should('be.visible')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.get('.radius')
      .click()

    cy.url()
      .should('include', '/secure')
    
    cy.get('#flash')

  })

  it('successfully logout', () => {
    cy.visit(`${url}/secure`)

    cy.get('.radius')
      .click()
    
      cy.url()
      .should('include', '/login')

  })

  it('failed login no input password', () => {
    cy.visit(`${url}/login`)

    cy.get('#username')
      .type('tomsmith')
      .should('be.visible')

    cy.get('#password')
      .type(' ')

    cy.get('.radius')
      .click()

    cy.get('#flash')

  })

})