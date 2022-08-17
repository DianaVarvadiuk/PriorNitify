import {StatusPage} from './page-object/StatusPage'
import {MerchantsPage} from './page-object/MerchantsPage'
import {ShippersPage} from './page-object/ShippersPage'
import {UsersTypeModal} from './page-object/UsersTypeModal'
import {usersDefaults,usersType,currentDefaults,deleteShippers} from './pages/shippers/_defaults'
describe('Create  new shippers', () => {
    beforeEach(()=>{
        cy.viewport(1920, 1080)
        usersDefaults()
        usersType()
        currentDefaults()
        deleteShippers()
    })
    it('Should check validation form add shippers', () => {
        cy.login()
      const statusPage = new StatusPage()
      statusPage
        .visit()
     const shippersPage = new ShippersPage()
     shippersPage
        .visit()
    shippersPage
        .getNewShippersBtn()
        .click()
    const merchantsPage = new MerchantsPage()
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
    .type('Go up')
  usersTypeModal
    .getFirstName()
    .type('Lykash')
  usersTypeModal
    .getLastName()
    .type('Anna')
  usersTypeModal
    .getPhoneNumber()
    .type('45676')
  usersTypeModal
    .getInvalidFeadbackPhone()
    .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
  usersTypeModal
    .getEmailAddress()
    .type('ggyu@gmailcom')
  usersTypeModal
    .getInvalidFeadbackEmail()
    .should('have.text','Email Address required')
  usersTypeModal
    .getNextBtn()
    .should('be.disabled')
  usersTypeModal
    .getPhoneNumber()
    .clear()
    .type('+38098757')
  usersTypeModal
    .getEmailAddress()
    .clear()
    .type('goupofficall@gmail.com')
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
      .type('adress')
  merchantsPage
      .getInvalidFeadbackZipCode()
      .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
  merchantsPage
      .getNextBtn().should('be.disabled')
  usersTypeModal
      .getAddressLine1()
      .clear()
      .type('52 Bald Hill Street Dallas ')
  usersTypeModal
      .getAddressLine2()
      .clear()
      .type('2 George Lane Houston ')
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
    .should('not.be.checked')
  merchantsPage
    .getCheckboxValueSix()
    .check()
    .should('be.checked')
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
    it('Should check  edit/view  and delete shippers', () => {
      cy.login()
      const statusPage = new StatusPage()
      statusPage
       .visit()
       const shippersPage = new ShippersPage()
       shippersPage
          .visit()
      shippersPage
        .getShippersEditBtn()
        .should('be.disabled')
        shippersPage
        .getDeleteBtn()
        .should('be.enabled')
        .click()
      const usersTypeModal = new UsersTypeModal()
      usersTypeModal
        .getModalDeleteBtn()
        .click()
        shippersPage
        .getSuccessMessage()
        .should('be.visible')
    })
})