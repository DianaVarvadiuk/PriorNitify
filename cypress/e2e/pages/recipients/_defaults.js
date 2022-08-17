export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentRecipientsFixtures.json'}).as('GetCurrent-Fixtures')
}
export function allRecipients(){
    cy.intercept('POST',/\/recipients/, { fixture: 'interceptRecipientsFixtures.json' }).as('PostRecipients-Fixtures')
}
export function editRecipients(){
    cy.intercept('GET',/\/recipients\/[\w]{1,}/,{fixture: 'interceptRecipientsEditFixtures.json'}).as('GetRecipientsEdit-Fixtures')
}
export function recipientsPage(){
    cy.intercept('GET','/recipients?page=1&perPage=10',{fixture: 'interceptRecipientsPageFixtures.json'}).as('GetRecipientsPage-Fixtures')
}

export function changeRecipients(){
    cy.intercept('PUT',/\/recipients\/[\w]{1,}/,{fixture: 'interceptRecipientsPutFixtures.json'}).as('PutRecipientsEdit-Fixtures')
}
export function deleteRecipients(){
    cy.intercept('DELETE',/\/recipients\/[\w]{1,}/,{fixture: 'interceptRecipientsDeleteFixtures.json'}).as('DeleteRecipientsEdit-Fixtures')
}

