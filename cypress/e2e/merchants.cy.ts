import {StatusPage} from './page-object/StatusPage'
import {MerchantsPage} from './page-object/MerchantsPage'
import {UsersTypeModal} from './page-object/UsersTypeModal'
describe('Create  new merchants', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        cy.viewport(1920, 1080)
       cy.intercept('POST',/\/users\/change-card/,{fixture: 'interceptChangeCardFixtures.json'}).as('PostCard-Fixtures')
       cy.intercept('POST',/\/users/,{fixture:'interceptUsersFixtures.json'}).as('GetUsers-Fixtures')
       cy.intercept('GET','/users?page=1&perPage=10&type=1',{fixture:'interceptUsersTypeFixtures.json'}).as('GetUsersType-Fixtures')
       cy.intercept('DELETE','/users/8567',{fixture:'interceptUsersDeleteFixtures.json'}).as('DeleteUsers-Fixtures')
         
    })
    it('Should check validation form add merchants', () => {
        cy.login()
      const statusPage = new StatusPage()
      statusPage
        .visit()
      const merchantsPage = new MerchantsPage()
      merchantsPage
        .visit()
      merchantsPage
        .getNewMerchantsBtn()
        .click()
      merchantsPage
        .getCountry()
        .select(1)
      const usersTypeModal = new UsersTypeModal()
      usersTypeModal
      .getFirstStep().should('have.class','active')
      merchantsPage
        .focusCompany()
        .focus()
      usersTypeModal
        .focusFirstName()
        .focus()
      usersTypeModal
        .getInvalidFeadbackFirstName()
        .should('have.text','First Name required, at least 1 and no more than 50 characters')
      usersTypeModal
        .focusLastName()
        .focus()
      usersTypeModal
        .getInvalidFeadbackLastName()
        .should('have.text','Last Name required, at least 1 and no more than 50 characters')
      usersTypeModal
        .focusPhoneNumber()
        .focus()
      usersTypeModal
        .getInvalidFeadbackPhone()
        .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
      usersTypeModal
        .focusEmailAddress()
        .focus()
      usersTypeModal
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
      merchantsPage
        .getCountry().select(2)
      usersTypeModal
        .getCompany()
        .type('Drive')
      usersTypeModal
        .getFirstName()
        .type('Antonenko')
      usersTypeModal
        .getLastName()
        .type('Vladislava')
      usersTypeModal
        .getPhoneNumber()
        .type('423423')
      usersTypeModal
        .getInvalidFeadbackPhone()
        .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
      usersTypeModal
        .getEmailAddress()
        .type('sdad@gmailcom')
      usersTypeModal
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
      usersTypeModal
        .getNextBtn()
        .should('be.disabled')
      usersTypeModal
        .getPhoneNumber()
        .clear()
        .type('+38097423423')
      usersTypeModal
        .getEmailAddress()
        .clear()
        .type('driveofficall@gmail.com')
      usersTypeModal
        .getNextBtn()
        .should('be.enabled')
        .click()
      usersTypeModal
        .getLastStep().should('have.class','completed')
      //two pge recipient
      usersTypeModal
          .focusAdressLine1()
      usersTypeModal
          .focusCity()
      usersTypeModal
          .getInvalidFeadbackAdress1()
          .should('have.text','Address Line 1 required, at least 1 and no more than 100 characters')
      usersTypeModal
          .focusZipCode()
          .focus()
      usersTypeModal
          .getInvalidFeadbackCity()
          .should('have.text','City required, at least 1 and no more than 100 characters')
      usersTypeModal
          .getAddressLine1()
          .clear()
          .type('dfdfsfsfsf')
      merchantsPage
          .getInvalidFeadbackZipCode()
          .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
      merchantsPage
          .getNextBtn().should('be.disabled')
      usersTypeModal
          .getAddressLine1()
          .clear()
          .type('42 Bald Hill Street Dallas TX 75228')
      usersTypeModal
          .getAddressLine2()
          .clear()
          .type('1 George Lane Houston TX 77096')
      usersTypeModal
          .getCity()
          .clear()
          .type('Texas')
      usersTypeModal
          .getZipCode()
          .clear()
          .type('123')
    
      usersTypeModal
          .getZipCode()
          .clear()
          .type('123456789012345')
      merchantsPage
          .getNextBtn()
          .should('be.enabled')
          .click()
      usersTypeModal
          .getThirthStep()
          .should('have.class','active')
      merchantsPage
        .getCheckboxValueOne()
        .should('not.be.checked')
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
        .should('be.enabled')
        .click()
      merchantsPage 
        .getModal()
        .click()
    })
    it('Should check  edit/view  and delete merchants', () => {
      cy.login()
      const statusPage = new StatusPage()
      statusPage
       .visit()
    const merchantsPage = new MerchantsPage()
      merchantsPage
        .visit()
      merchantsPage
        .getMerchantsEditBtn()
        .should('be.disabled')
      merchantsPage
        .getDeleteBtn()
        .should('be.enabled')
        .click()
      const usersTypeModal = new UsersTypeModal()
      usersTypeModal
        .getModalDeleteBtn()
        .click()
        cy.wait(2000)
      merchantsPage
        .getSuccessMessage()
        .should('contain','Merchant has been successfully deleted!')
    })
})