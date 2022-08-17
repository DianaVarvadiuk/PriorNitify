export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentAccountFixtures.json'}).as('GetCurrent-Fixtures')
}
export function defaultSettings(){
    cy.intercept('GET',/\/users\/me\/settings/,{fixture: 'interceptSettingsAccountFixtures.json'}).as('GetSettings-Fixtures')
}
export function changePassword(){
    cy.intercept('POST',/\/users\/change-password/,{fixture: 'interceptPostPasswordFixtures.json'}).as('PostPassword-Fixtures')
}
export function noticeEmails(){
    cy.intercept('POST',/\/users\/set-notice-emails/,{fixture: 'interceptNoticeEmailsFixtures.json'}).as('PostNoticeEmails-Fixtures')
}