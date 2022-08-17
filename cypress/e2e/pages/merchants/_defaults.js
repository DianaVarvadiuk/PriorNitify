export function changeCard(){
    cy.intercept('POST',/\/users\/change-card/,{fixture: 'interceptChangeCardFixtures.json'}).as('PostCard-Fixtures')
}
export  function usersDefaults(){
    cy.intercept('POST',/\/users/,{fixture:'interceptUsersFixtures.json'}).as('PostUsers-Fixtures')
}
export function usersType(){
    cy.intercept('GET','/users?page=1&perPage=10&type=1',{fixture:'interceptUsersTypeFixtures.json'}).as('GetUsersType-Fixtures')
}
export function deleteShippers(){
    cy.intercept('DELETE','/users/8569',{fixture:'interceptUsersShippersDeleteFixtures.json'}).as('DeleteShippersDeleteUsers-Fixtures')
}