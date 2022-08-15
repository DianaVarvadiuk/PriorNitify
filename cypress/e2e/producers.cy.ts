import {StatusPage} from './page-object/StatusPage'
import {ProducersPage} from './page-object/ProducersPage'
describe('Check validation for account settings', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentAccountFixtures.json'}).as('GetCurrent-Fixtures')
    })
    it('check basic validation Prior Notices page',() => {
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const producersPage = new ProducersPage()
        producersPage
            .getListProducers()
            .click()
        producersPage
            .getNewProducers()
            .click()      
    })
})