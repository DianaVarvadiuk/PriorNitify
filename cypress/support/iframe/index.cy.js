Cypress.Commands.add('getIframeBody',(iframeLocator) => {
   return cy
   .get(iframeLocator)
   .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
 })
 