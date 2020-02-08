describe('tradoCard',()=>{

    it('app running', function () {
        cy.visit('http://localhost:3000/');
        cy.get('.IDcardbtn')
            .click();
    });

    it('check Trado form',()=>{

        cy.url().should("include", "http://localhost:3000/idcard").log('Url correct');
        cy.get('#name').type('Akintunde israel');
        cy.get('#role').contains('Developer',{force:true});
    });

})