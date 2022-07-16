 export default Cypress.Commands.add('getIframeBody',(iframe) => {
    return cy
    .get('.skiptranslate').last()
    // .its('0.document').should('not.be.empty')
     .then(cy.wrap)
  })