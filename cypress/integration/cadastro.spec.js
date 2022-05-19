describe('Cadastro de usuário', () => {
    it('Deve cadastrar um entregador', () => {
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: "Raquel Dutra",
            cpf: "06088779987",
            email: "raquel@gmail.com",
            whatsapp:"9889696",
            endereco: {
                cep: "88054340",
                rua: "Rua Ernani Castro dos Santos",
                numero: "93",
                complemento: "apto ",
                bairro: "Canasvieiras",
                cidade_uf: "Florianópolis/SC"
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type=button][value="Buscar CEP"]').click()
    
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)
        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()
        
    })
 })