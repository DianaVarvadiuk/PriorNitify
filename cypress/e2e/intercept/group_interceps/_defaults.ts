export function currentDefaults(){
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentFixtures.json'}).as('GetCurrent-Fixtures')
}
export function authActivate(){
    cy.intercept('POST',/\/auth\/activate/, { fixture: 'interceptActivateFixtures.json' }).as('PostActivate-Fixtures')
}
export function typeDefaults(){
    cy.intercept('POST',/\/users\/type/, { fixture: 'interceptTypeFixtures.json' }).as('PostType-Fixtures')
}
export function subscribeDefaults()
{
    cy.intercept('POST',/\/users\/subscribe/, { fixture: 'interceptSubscribeFixtures.json' }).as('PostSubscribe-Fixtures')
}

export function currentSubscription(){
    cy.intercept('GET',/\/app-plus\/current-subscription/,{fixture: 'interceptCurrentSubscriptionFixtures.json'}).as('GetCurrentSubscription-Fixtures')
}
export function paymentInfo(){
    cy.intercept('GET',/\/users\/payment-info/,{fixture: 'interceptPaymentInfoFixtures.json'}).as('GetPaymentInfo-Fixtures')
}
export function statisticDefaults(){
    cy.intercept('GET',/\/notices\/statistic/,{fixture: 'interceptStatisticFixtures.json'}).as('GetStatistic-Fixtures')
}