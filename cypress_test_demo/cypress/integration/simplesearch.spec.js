describe('Cypress Test -simple google search', () =>{

 it('cy.visit() - visit a remote url', () => {
     cy.visit('www.google.com')
 });
 it('search for a location ', () => {
     cy.get('#lst-ib').type('Europe');
     cy.get('#tsf').submit();
     cy.log("Found Europe -Test Succesful!!")
 })
});

