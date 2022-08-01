export function loadInterceptsDefaults(){
    cy.intercept('POST',/\/auth\/activate/, { fixture: 'interceptActivateFixtures.json' }).as('PostActivate-Fixtures')
    cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentFixtures.json'}).as('GetCurrent-Fixtures')
    cy.intercept('POST',/\/users\/type/, { fixture: 'interceptTypeFixtures.json' }).as('PostType-Fixtures')
    cy.intercept('POST',/\/users\/subscribe/, { fixture: 'interceptSubscribeFixtures.json' }).as('PostSubscribe-Fixtures')
    cy.intercept('GET',/\/app-plus\/current-subscription/,{fixture: 'interceptCurrentSubscriptionFixtures.json'}).as('GetCurrentSubscription-Fixtures')
    cy.intercept('GET',/\/users\/payment-info/,{fixture: 'interceptPaymentInfoFixtures.json'}).as('GetPaymentInfo-Fixtures')
    cy.intercept('GET',/\/notices\/statistic/,{fixture: 'interceptStatisticFixtures.json'}).as('GetStatistic-Fixtures')
    cy.intercept('GET','users?page=1&perPage=10&type=1',{fixture: 'interceptType1Fixtures.json'}).as('GetTypeFixtures')
}
