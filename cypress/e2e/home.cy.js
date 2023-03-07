/// <reference types="cypress"/>

//describe suite
describe('home', () => { 
    //it casos
    // dentro do describe pode ter varios suites
    it('webapp deve estar online', () => { 
    cy.visit('http://localhost:8080')
    
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
   
    })

})