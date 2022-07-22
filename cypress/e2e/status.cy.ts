import {loadInterceptsDefaults} from './intercept/group_interceps/_defaults'
import {StatusPage} from './page-object/StatusPage'

describe('Status page', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        loadInterceptsDefaults()
        cy.viewport(1920, 1080)
      
     })
  it('Should check validation form', () => {
    cy.login()
  const statusPage = new StatusPage()
  statusPage.visit()
  statusPage 
    .getModal()
    .click()
  statusPage
    .getCountry()
    .click()
  statusPage
    .getAndorra()
    .click()
  statusPage
      .getCityFocus()
  statusPage
      .getFocusAdress()
  statusPage
    .getInvalidFeedbackCity()
    .should('have.text','City required, at least 1 and no more than 100 characters')
  statusPage
      .getZIPPostalCodeFocus()
  statusPage
      .getInvalidFeedbackAdress()
      .should('have.text','Address Line 1 required, at least 1 and no more than 100 characters')
  statusPage
  .getPhoneFocus()
  statusPage
    .getInvalidFeedbackZIPPostal()
    .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
    statusPage
  .getCity('Encamp')
  cy.wait(1000)
  //invalid data
  statusPage
  .getZIPPostalCode('890908908908908908089080')
  statusPage
  .getInvalidFeedbackZIPPostal()
  .should('have.text','ZIP/Postal Code required, at least 1 and no more than 15 characters')
  statusPage
  .getAdress('EscaldesEngordany')
  statusPage
  .getPhone('+576575')
  statusPage
  .getInvalidFeedbackPhone()
  .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
  statusPage
  .getZIPPostalCode('12345678877786785858758757858')
  statusPage
  .getPhone('+3809')
  //valid data
  statusPage
   .getZIPPostalCode('2345678')
  statusPage
    .getPhone('+380978654896')
  statusPage
    .getRegistrationNumber('12512512512512512515215251255252')
  statusPage
    .getSubmitBtn()
    .click()
  cy.wait(1000)
  statusPage
  .getCurrentPassword('Tt12345678')
  //statusPage.getClickHere().should('include','https://www.access.fda.gov/oaa/createNewAccountflow.htm?execution=e1s1')
  statusPage
    .getConfirmBtn()
    .first()
    .click()
  statusPage
    .getSaveBtn()
    .last()
    .click()
  })
})