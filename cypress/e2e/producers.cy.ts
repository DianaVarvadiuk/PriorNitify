import {StatusPage} from './page-object/StatusPage'
import {UsersTypeModal} from './page-object/UsersTypeModal'
import {ProducersPage} from './page-object/ProducersPage'
import {MerchantsPage} from './page-object/MerchantsPage'
import {currentDefaults,typeProducers,usersDefaults} from './pages/producers/_defaults'
describe('Check validation for producers', () => {
    beforeEach(()=>{
        currentDefaults() 
        typeProducers()
        usersDefaults()
        cy.viewport(1320, 1000)
    })
    it('check basic validation producers page',() => {
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
        producersPage
            .getCountry()
            .select(8)
        const usersTypeModal = new UsersTypeModal()
        usersTypeModal
            .getFirstStep()
            .should('have.class','active')
        usersTypeModal 
            .focusFirstName()
            .focus()
        usersTypeModal
            .getCompany()
            .focus()
        usersTypeModal
            .getInvalidFeadbackCompany()
            .should('have.text','Company Name required, at least 3 and no more than 100 characters')
        usersTypeModal 
            .getInvalidFeadbackFirstName()
            .should('have.text','First Name required, at least 1 and no more than 50 characters')
        usersTypeModal
            .focusLastName()
            .focus()
        usersTypeModal
            .getCompany()
            .type('Banco Macro')
        usersTypeModal
            .getInvalidFeadbackLastName()
            .should('have.text','Last Name required, at least 1 and no more than 50 characters')
        usersTypeModal
            .getFirstName()
            .type('Keyt')
        usersTypeModal
            .getLastName()
            .type('Milton')
        usersTypeModal
            .getNextBtn()
            .should('be.enabled')
            .click()
        usersTypeModal
            .getLastStep().should('have.class','completed')
        usersTypeModal
            .focusAdressLine1()
            .focus()
        usersTypeModal
            .getInvalidFeadbackAdress1()
            .should('have.text','Address Line 1 required, at least 1 and no more than 100 characters')
        usersTypeModal 
            .getAddressLine1()
            .type('Argentina: Buenos Aires')
        usersTypeModal
            .getAddressLine2()
            .type('Argentina: Buenos Aires 2')
        usersTypeModal
            .focusCity()
            .focus()
        usersTypeModal
            .getInvalidFeadbackCity()
            .should('have.text','City required, at least 1 and no more than 100 characters')
        usersTypeModal
            .getCity()
            .type('Argentina')
        usersTypeModal
            .focusZipCode()
            .focus()
        producersPage
            .getInvalidFeadbackZipCode()
            .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
        usersTypeModal
            .getZipCode()
            .type('12345678912345678')
        producersPage
            .getInvalidFeadbackZipCode()
            .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
        usersTypeModal
            .getZipCode()
            .clear()
            .type('213323')
        usersTypeModal
            .getStepNextBtn()
            .click()
        usersTypeModal
            .getThirthStep()
            .should('have.class','active')
        const merchantsPage = new MerchantsPage()
          merchantsPage
            .getCheckboxValueTwo()
            .should('not.be.checked')
          merchantsPage
            .getCheckboxValueThree()
            .should('not.be.checked')
          merchantsPage
            .getCheckboxValueFour()
            .should('not.be.checked')
          merchantsPage
            .getCheckboxValueFife()
            .check()
            .should('be.checked')
          merchantsPage
            .getCheckboxValueSix()
            .should('not.be.checked')
          merchantsPage
            .getInputFdaCode()
            .should('be.disabled')
        usersTypeModal
            .getSubmitBtn()
            .click()
        producersPage
            .getFourStep()
            .should('have.class','active')
        producersPage
            .getYesCheckbox()
            .first()
            .should('not.be.checked')
        producersPage
            .getNoCheckbox()
            .last()
            .should('be.checked')
        usersTypeModal
            .getSubmitBtn()
            .click()
        cy.wait(1000);
        producersPage
            .getModalOkBtn()
            .click('bottom')
    })
})