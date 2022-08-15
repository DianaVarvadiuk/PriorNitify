import {StatusPage} from './page-object/StatusPage'
import {PriorNoticesPage} from './page-object/PriorNoticesPage'
describe('Check validation for account settings', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentAccountFixtures.json'}).as('GetCurrent-Fixtures')
        cy.intercept('GET','notices?page=1&perPage=10',{fixture: 'interceptNoticesFixtures.json'}).as('GetNotices-Fixtures')
    })
    it('check basic validation Prior Notices page',() => {
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const priorNoticesPage = new PriorNoticesPage()
        priorNoticesPage
            .getListPriorNotices()
            .click()
        priorNoticesPage
            .getNewOrderBtn()
            .click()
        priorNoticesPage
            .selectRecipient()
            .click()
        priorNoticesPage
            .getThreeRecipient()
            .click()
        priorNoticesPage
            .getRecipientCompany()
            .should('have.text','Gow')
        priorNoticesPage
            .getRecipientContactName()
            .should('have.text','Oleg Melnyk')
        priorNoticesPage
            .getRecipientAddress1()
            .should('have.text','Laurel Canyon Boulevard')
        priorNoticesPage
            .getRecipientAddress2()
            .should('have.text','Hollywood boulevard')
        priorNoticesPage
            .getRecipientCity()
            .should('have.text','Los Angeles')
        priorNoticesPage
            .getRecipientState()
            .should('have.text','California')
        priorNoticesPage
            .getRecipientCode()
            .should('have.text','90001')
        priorNoticesPage
            .getRecipientEmail()
            .should('have.text','oleg@gmail.com')
        priorNoticesPage
            .getRecipientPhone()
            .should('have.text','3809987897997')
        priorNoticesPage
        .getFooter()
        .last()
        .find('button')
        .click()
    })
})