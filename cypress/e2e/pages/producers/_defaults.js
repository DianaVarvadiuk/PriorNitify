export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentProducersFixtures.json'})
}
export function typeProducers(){
    cy.intercept('GET','users?page=1&perPage=10&type=2',{fixture: 'interceptUsersTypeProducersFixtures.json'})
}
export function usersDefaults(){
    cy.intercept('POST',/\/users/,{fixture: 'interceptUsersProducersFixtures.json'})
}