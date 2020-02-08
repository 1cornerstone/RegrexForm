
describe('cypress',()=>{
    it('cypress working',()=>{
        expect(true).to.equal(true)
    });

    it('app running',()=>{
        cy.visit('http://localhost:3000')
    });

    it('find  button and check content ',()=>{
        cy.get('Button').parent()
            .find('.masterCardbtn')
            .contains('Mastercard');

        cy.get('Button').parent()
            .find('.IDcardbtn')
            .contains('Create ID CARD')

    });

    // it('go back to Home', ()=>{
    //     cy.go('back')
    // });

    // it('check ID button pressed', ()=>{
    //     cy.get('.IDcardbtn').trigger('onClick')
    //         .should('change url to ID card ',()=>{
    //             cy.url().should('eq','http://locahost:3000/idcard')
    //
    //         })
    // });


});