export function allProducts(){
    cy.intercept('POST',/\/products/,{fixture: 'interceptPostProductsFixtures.json'}).as('PostProducts-Fixtures')
}
export function assortmentsProducts(){
    cy.intercept('GET',/\/assortmentsProducts/,{fixture: 'interceptGetProductsPageFixtures.json'}).as('ProductsPage-Fixtures')
}
export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentProductsFixtures.json'}).as('GetCurrent-Fixtures')
}
export function productProducers(){
    cy.intercept('GET', '/users?activatedOnly=true&withFdaAccountOnly=true&type=2', { fixture: 'interceptProductProducers.json'})
}