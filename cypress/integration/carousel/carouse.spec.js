/// <reference types="cypress" />

it('Load Carousel', () => {
    cy.visit('http://localhost:4200/');

    const img = cy.get('.carousel img').should('have.attr', 'src');
    img.should('contain', '1');
    
    cy.get('button.next').click().then(() => {
        const img = cy.get('.carousel img').should('have.attr', 'src');
        img.should('contain', '2');;
    })

    cy.get('button.next').click().then(() => {
        const img = cy.get('.carousel img').should('have.attr', 'src');
        img.should('contain', '3');;
    })

});

