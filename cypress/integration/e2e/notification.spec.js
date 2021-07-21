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

describe('Should test notification message', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://the-internet.herokuapp.com/notification_message_rendered')
  })

  it("should be able navigate to notification page and check elements", () => {

    cy.url().should("include", "notification_message_rendered")
    
    cy.get('.example h3')
      .should("be.visible") 
      .should('have.text', "Notification Message")

    cy.get('.example p')
      .should("be.visible")

     

  })


  it('Should check notifcation is successfull or not successfull',()=> {
   
     const arr = ["Action successful", "Action unsuccessful, please try again"]
     const element = '.flash.notice'
    cy.get('[href="/notification_message"]')
    .should("be.visible")
    .click()

    cy.get('.flash.notice').then(($a) => { 
      if ($a.text().includes('Action successful')) {
          cy.contains('Action successful')
         
      } else if ($a.text().includes('Action unsuccessful, please try again')) { 
          cy.contains('Action unsuccessful, please try again')
           
      } 
  })

})
 
it('Should be able to close flash notice',()=> {
   
 cy.get('[href="/notification_message"]')
 .should("be.visible")
 .click()

 cy.get("a.close")
   .should("be.visible")
   .click({ force: true })

cy.get(".flash.notice")
  .should("not.exist")
})


  
})
