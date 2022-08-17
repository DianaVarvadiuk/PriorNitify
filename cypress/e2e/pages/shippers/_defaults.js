export function usersDefaults(){
    cy.intercept('POST',/\/users/,{fixture:'interceptShippersUsersFixtures.json'}).as('PostUsers-Fixtures')
}
export function usersType(){
    cy.intercept('GET','/users?page=1&perPage=10&type=3',{fixture:'interceptShippersUsersTypeFixtures.json'}).as('GetUsersType-Fixtures') 
}
export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptShippersCurrentFixtures.json'}).as('GetCurrent-Fixtures')  
}
export function deleteShippers(){
    cy.intercept('DELETE','/users/8567',{fixture:'interceptUsersDeleteFixtures.json'}).as('DeleteUsers-Fixtures') 
}

 