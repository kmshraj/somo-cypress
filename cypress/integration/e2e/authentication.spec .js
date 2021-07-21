/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Should test Authtentication form', () => {

  const username = Cypress.env('username');
  const password = Cypress.env('password');
  const username2 = Cypress.env('username2');
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://the-internet.herokuapp.com/login')
    

  })

  it("should not able able to login with incorrect credentials", () => {

    cy.url().should("include", "login")
  
    cy.get('.fa-sign-in')
      .should('have.text', " Login")
    
    cy.get('.example h2')
      .should('have.text', "Login Page")

    cy.get("input#username")
      .should("be.visible")
      .clear()
      .type(username2)
   
    cy.get("input#password")
      .should("be.visible")
      .clear()
      .type(password)
   
    cy.get('.fa-sign-in')
      .should("be.visible")
      .click()
    
    cy.get(".flash.sucess")
      .should("not.exist")
    
    cy.get(".flash.error")
      .contains("Your username is invalid!")
    
    cy.get("a.close")
      .should("be.visible")
      .click({ force: true })

    cy.get(".flash.error")
      .should("not.exist")


    
  })

  it("should not able able to login with empty credentials", () => {

    cy.get("input#username")
      .should("be.visible")
    
    cy.get("input#password")
      .should("be.visible")
     
    cy.get('.fa-sign-in')
      .should("be.visible")
      .click()
    
    cy.get(".flash.sucess")
      .should("not.exist")
    
    cy.get(".flash.error")
      .contains("Your username is invalid!")

    cy.get("a.close")
      .should("be.visible")
      .click({ force: true })

    cy.get(".flash.error")
      .should("not.exist")

    
  })

  it('should be able to login sucessfully with correct credentials', () => {

    cy.get("input#username")
      .clear()
      .type(username)
   
    cy.get("input#password")
      .clear()
      .type(password)
    
    cy.get('.fa-sign-in').click()
    
    cy.get('.flash.error')
      .should('not.exist');
    
    cy.get(".flash.success")
      .should("contain", "You logged into a secure area!")
    
    cy.get('.example h2')
      .should('have.text', " Secure Area")
    
    cy.get(".icon-signout")
      .should("be.visible")
      .click()
    
    cy.get(".flash.success")
      .should("be.visible")
      .contains("You logged out of the secure area!")
    
    cy.get("a.close")
      .should("be.visible")
      .click({ force: true })

    cy.get(".flash.success")
      .should("not.exist")

    
  })

  
})
