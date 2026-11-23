describe('Formulário de Consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
    
        cy.start()
        cy.submitLogin("papito@webdojo.com", "katana123")

        cy.goTo('Formulários', 'Consultoria')
        
        cy.get('input[placeholder="Digite seu nome completo"]').type('Alexandre Ventura')
        cy.get('input[placeholder="Digite seu email"]').type('alexandreventura@gmail.com')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('(11) 99999-1000')
            .should('have.value', '(11) 99999-1000')    

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select("Individual")

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .check()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('not.be.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('767.497.160-08')
            .should('have.value', '767.497.160-08')

        const discoveryChannel = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
        ]
        
        discoveryChannel.forEach((channel) => {
            cy.contains('label', channel)
                .parent()
                .find('input')
                .check()
                .should('be.checked')
        })
    })
})