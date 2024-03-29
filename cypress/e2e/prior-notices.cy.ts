import {StatusPage} from './page-object/StatusPage'
import {PriorNoticesPage} from './page-object/PriorNoticesPage'
import {UsersTypeModal} from './page-object/UsersTypeModal'
import { should } from 'chai'
describe('Check validation for account settings', () => {
    beforeEach(()=>{
        cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentAccountFixtures.json'}).as('GetCurrent-Fixtures')
        cy.intercept('POST',/\/recipients/, { fixture: 'interceptRecipientsFixtures.json' }).as('PostRecipients-Fixtures')
        cy.intercept('POST',/\/products/,{fixture: 'interceptPostProductsFixtures.json'}).as('PostProducts-Fixtures')
        // cy.intercept('POST',/\/users/,{fixture: 'interceptUsersProducersFixtures.json'})
        // cy.intercept('POST',/\/products/,{fixture: 'interceptPostProductsFixtures.json'}).as('PostProducts-Fixtures')
        //cy.intercept('GET','users?page=1&perPage=10&type=2',{fixture: 'interceptUsersTypeProducersFixtures.json'})
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
            .should('have.text','Brookfield')
        priorNoticesPage
            .getRecipientContactName()
            .should('have.text','David Fernyk')
        priorNoticesPage
            .getRecipientAddress1()
            .should('have.text','Ontario')
        priorNoticesPage
            .getRecipientAddress2()
            .should('have.text','Ontario Toronto')
        priorNoticesPage
            .getRecipientCity()
            .should('have.text','Toronto')
        priorNoticesPage
            .getRecipientState()
            .should('have.text','Alabama')
        priorNoticesPage
            .getRecipientCode()
            .should('have.text','23432')
        priorNoticesPage
            .getRecipientEmail()
            .should('have.text','david@gmail.com')
        priorNoticesPage
            .getRecipientPhone()
            .should('have.text','38098768733')
        priorNoticesPage
            .getFooter()
            .last()
            .find('button')
            .click()
        priorNoticesPage
            .selectProducts()
            .last()
            .click()
        priorNoticesPage
            .getThreeRecipient()
            .click()
            priorNoticesPage
            .closeProduct()
            .click()
        priorNoticesPage
            .selectProducts()
            .last()
            .click()
        priorNoticesPage
            .getThreeRecipient()
            .should('be.visible')
            .click()
        priorNoticesPage
            .getQuantity()
            .clear()
            .type('8')
        priorNoticesPage
            .getMeasurement()
            .select('Liters')
        priorNoticesPage
            .getFooter()
            .last()
            .find('button')
            .click()
        priorNoticesPage
            .checkProductName()
            .should('have.text','Product: Womens sneakers')
        priorNoticesPage
            .checkQuantity()
            .should('have.value','8')
        priorNoticesPage
            .checkMeasurement()
            .should('have.value','Liters')
    })
})