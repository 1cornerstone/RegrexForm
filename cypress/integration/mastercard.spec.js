describe('mastercard ', () => {

    it('mastercard page Visited', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.masterCardbtn')
            .click();
    });

    it('check form', () => {
        cy.url().should("include", "http://localhost:3000/mastercard");
        cy.get('#name').type('Akintunde Israel');
        cy.get('#cardnumber').type('1111-1111-1111-111');// this card is not correct
        cy.get('#valid').type('02/03');
        cy.get('.download').click() //onclick mastercard should be generate but since cardnumber isnot correct it will display info on the form
    })
});