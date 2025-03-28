import { funcionario, agendamentos } from '../fixtures/agendamentos.json'

describe('Meus Agendamentos', () => {

    before(() => {
        cy.criarAgendamentosApi(funcionario, agendamentos)
    })

    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('/')

        cy.contains('p', 'Faça login com a sua conta')
            .should("be.visible")

        cy.login(funcionario)
        cy.verificaUsuarioLogado(funcionario)
    })

    it('Deve exibir meus agendamentos', () => {

        cy.get('ul li')
            .should('be.visible')
            .and('have.length', agendamentos.length)
            .each(($li, index) => {

                const agendamento = agendamentos[index]
                const resultado = `${agendamento.servico.descricao} no dia ${agendamento.data} às ${agendamento.hora}`

                cy.wrap($li)
                    .invoke('text')
                    .should('contain', agendamento.usuario.nome)
                    .and('contain', resultado)
            })
    })

    it('Deve cancelar um agendamento', ()=>{
        const agendamento= agendamentos.find(x=> x.usuario.email==='peter.parker@dailybugle.com')
        
        cy.contains('ul li', agendamento.usuario.nome) 
            .as('agendamentoItem')

        cy.get('@agendamentoItem')
            .should('be.visible').click()

        cy.contains('li span', 'Cancelar agendamento')
            .should('be.visible')
            .click()

        cy.verificaToast('Agendamento cancelado com sucesso!')

        cy.get('@agendamentoItem')
            .should('not.exist')

    }) 

    it('Deve enviar uma solicitação de lembrete', ()=>{
        const agendamento= agendamentos.find(x=> x.usuario.email==='steve.rogers@avengers.com')
        
        cy.contains('ul li', agendamento.usuario.nome) 
            .as('agendamentoItem')

        cy.get('@agendamentoItem')
            .should('be.visible').click()

        cy.contains('li span', 'Enviar lembrete por e-mail')
            .should('be.visible')
            .click()

        cy.verificaToast('Lembrete enviado com sucesso!')

        cy.get('@agendamentoItem')
            .should('be.visible')

    }) 
})