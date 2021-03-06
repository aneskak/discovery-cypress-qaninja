

describe('Cadastro', ()=>{
    it ('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Fernando Papito',
            cpf: '00032659865324',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '02713000',
                rua: 'Rua Coronel Eucludes Machado',
                numero: '123',
                complemento: 'ap 37',
                bairro: 'Jardim das Graças',
                cidade_uf: 'São Paulo/SP'
            }
        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
    })
})

































