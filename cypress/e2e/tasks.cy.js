/// <reference types="cypress"/>


describe('tarefas', () => {

    it('deve cadastrar uma nova tarefa', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks/',
            method: 'DELETE',
            body: { name: 'Ler um livro node.js' }

        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro node.js')

        cy.contains('button', 'Create').click()

         //combina condição
        cy.contains('main div p', 'Ler um livro node.js')
            .should('be.visible')

    })

})
