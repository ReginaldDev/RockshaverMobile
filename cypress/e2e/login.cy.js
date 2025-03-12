describe('Login', () => {

  beforeEach(()=>{
    cy.viewport('iphone-xr')
    cy.visit('/')
    cy.contains('p', 'Faça login com a sua conta')
      .should("be.visible")
  })

  it('Deve logar como barbeiro', () => {
    
    const funcionario = {
      matricula: '1007',
      senha: 'pwd123',
      nome: 'Slash'
    }

    cy.login(funcionario)
    cy.verificaUsuarioLogado(funcionario)

  })

  it('Não deve logar quando a senha é inválida', ()=>{
    const funcionario = {
      matricula: '1008',
      senha: 'abc123',
    }

    cy.login(funcionario)

    //cy.document().then((doc)=>{
    //  const codigoHtml =doc.documentElement.outerHTML
    //  cy.writeFile('temp.html', codigoHtml)
    //})

    cy.verificaToast('Falha ao realizar login. Verifique suas credenciais.')
  })

  it('Não deve logar quando a matrícula não existe', ()=>{
    const funcionario = {
      matricula: '1010',
      senha: 'abc123',
    }

    cy.login(funcionario)
    cy.verificaToast('Falha ao realizar login. Verifique suas credenciais.')

  })

  it('Não deve logar quando os campos não são preenchidos', ()=>{
    
    cy.get('form').submit()
    cy.verificaToast('Informe sua matrícula e sua senha!')

  })
})

