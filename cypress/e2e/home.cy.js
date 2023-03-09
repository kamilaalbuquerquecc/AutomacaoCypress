/// <reference types="cypress"/>

//describe suite
describe('home', () => { 
  //it casos
  // dentro do describe pode ter varios suites
  it('webapp deve estar online', () => { 
  cy.visit('/')
  // 'eq' evento de comparacao
  cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  
  })

})