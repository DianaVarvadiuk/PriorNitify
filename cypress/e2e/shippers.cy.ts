import {StatusPage} from './page-object/StatusPage'
import {MerchantsPage} from './page-object/MerchantsPage'
import {ShippersPage} from './page-object/ShippersPage'
import {RecipientsPage} from './page-object/RecipientsPage'
describe('Create  new merchants', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        cy.viewport(1920, 1080)
        cy.intercept('POST',/\/users/,{fixture:'interceptShippersUsersFixtures.json'}).as('PostUsers-Fixtures')
        cy.intercept('GET','/users?page=1&perPage=10&type=3',{fixture:'interceptShippersUsersTypeFixtures.json'}).as('GetUsersType-Fixtures') 
        cy.intercept('GET',/\/users\/current/,{fixture: 'interceptShippersCurrentFixtures.json'}).as('GetCurrent-Fixtures')    
    })
    it('Should check validation form add merchants', () => {
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
  const recipientsPage = new RecipientsPage()
  recipientsPage
  recipientsPage
  .getFirstStep().should('have.class','active')
  merchantsPage
    .focusCompany()
    .focus()
  recipientsPage
    .focusFirstName()
    .focus()
  recipientsPage
    .getInvalidFeadbackFirstName()
    .should('have.text','First Name required, at least 1 and no more than 50 characters')
  recipientsPage
    .focusLastName()
    .focus()
  recipientsPage
    .getInvalidFeadbackLastName()
    .should('have.text','Last Name required, at least 1 and no more than 50 characters')
  recipientsPage
    .focusPhoneNumber()
    .focus()
  recipientsPage
    .getInvalidFeadbackPhone()
    .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
  recipientsPage
    .focusEmailAddress()
    .focus()
  recipientsPage
    .getInvalidFeadbackEmail()
    .should('have.text','Email Address required')
  merchantsPage
    .getCountry().select(2)
  recipientsPage
    .getCompany()
    .type('Go up')
  recipientsPage
    .getFirstName()
    .type('Lykash')
  recipientsPage
    .getLastName()
    .type('Anna')
  recipientsPage
    .getPhoneNumber()
    .type('45676')
  recipientsPage
    .getInvalidFeadbackPhone()
    .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
  recipientsPage
    .getEmailAddress()
    .type('ggyu@gmailcom')
  recipientsPage
    .getInvalidFeadbackEmail()
    .should('have.text','Email Address required')
  recipientsPage
    .getNextBtn()
    .should('be.disabled')
  recipientsPage
    .getPhoneNumber()
    .clear()
    .type('+38098757')
  recipientsPage
    .getEmailAddress()
    .clear()
    .type('goupofficall@gmail.com')
    recipientsPage
    .getNextBtn()
    .should('be.enabled')
    .click()
    recipientsPage
    .getLastStep().should('have.class','completed')
  //two pge recipient
  recipientsPage
      .focusAdressLine1()
  recipientsPage
      .focusCity()
  recipientsPage
      .getInvalidFeadbackAdress1()
      .should('have.text','Address Line 1 required, at least 1 and no more than 100 characters')
  recipientsPage
      .focusZipCode()
      .focus()
  recipientsPage
      .getInvalidFeadbackCity()
      .should('have.text','City required, at least 1 and no more than 100 characters')
  recipientsPage
      .getAddressLine1()
      .clear()
      .type('adress')
  merchantsPage
      .getInvalidFeadbackZipCode()
      .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
  merchantsPage
      .getNextBtn().should('be.disabled')
  recipientsPage
      .getAddressLine1()
      .clear()
      .type('52 Bald Hill Street Dallas ')
  recipientsPage
      .getAddressLine2()
      .clear()
      .type('2 George Lane Houston ')
  recipientsPage
      .getCity()
      .clear()
      .type('Texas')
  recipientsPage
      .getZipCode()
      .clear()
      .type('123')

  recipientsPage
      .getZipCode()
      .clear()
      .type('123456789012345')
  merchantsPage
      .getNextBtn()
      .should('be.enabled')
      .click()
  recipientsPage
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
  recipientsPage
    .getSubmitBtn()
    .should('be.enabled')
    .click()
  merchantsPage 
    .getModal()
    .click()

     
    })
})