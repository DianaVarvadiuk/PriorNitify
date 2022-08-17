export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentAccountFixtures.json'}).as('GetCurrent-Fixtures')
}
export function allRecipients(){
    cy.intercept('POST',/\/recipients/, { fixture: 'interceptRecipientsFixtures.json' }).as('PostRecipients-Fixtures')
}
export function allProducts(){
    cy.intercept('POST',/\/products/,{fixture: 'interceptPostProductsFixtures.json'}).as('PostProducts-Fixtures')
}