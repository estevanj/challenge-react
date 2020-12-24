// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

var user = {
  email: '',
  password: '',
}
describe('Login', () => {
  before(function () {
    cy.fixture('example').then(function (data) {
      user = data
    })
  })

  it('goes to login page', () => {
    cy.visit('/')
  })

  it('submit form', () => {
    cy.get('input[name=username]').type(user.email)
    cy.get('input[name=password]').type(user.password)
    cy.get('button').click()
  })
})
