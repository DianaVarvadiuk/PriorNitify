import {StatusPage} from './page-object/StatusPage'
import {RecipientDashboardPage} from './page-object/RecipientDashboardPage'
import {RecipientsPage} from './page-object/RecipientsPage'
describe('Create  new recipient', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
     })
  it('Should check validation form add recipient', () => {
    cy.viewport(1000, 800)
    cy.login()
    const statusPage = new StatusPage()
    statusPage.visit()
    const  recipientsPage = new RecipientsPage()
    recipientsPage
        .getRecipiensList()
        .click()
    recipientsPage
        .getNewRecipientsBtn()
        .click()
    //first page recipient
    recipientsPage
        .getFirstStep().should('have.class','active')
    recipientsPage
        .getCompany('rv')
    recipientsPage
        .focusLastName()
    recipientsPage
        .getInvalidFeadbackFirstName()
        .should('have.text','First Name required, at least 1 and no more than 50 characters')
    recipientsPage
        .focusPhoneNumber()
    recipientsPage
        .getInvalidFeadbackLastName()
        .should('have.text','Last Name required, at least 1 and no more than 50 characters')
    recipientsPage
        .focusFirstName()
    recipientsPage
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn().should('be.disabled')
    recipientsPage
        .getCompany('live')
    recipientsPage
        .getFirstName('Kriss')
    recipientsPage
        .getLastName('Shaboo')
    recipientsPage
        .getPhoneNumber('466')
    recipientsPage
        .getInvalidFeadbackPhone()
        .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
    recipientsPage
        .getEmailAddress('myemail')
    recipientsPage
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn().should('be.disabled')
        recipientsPage
        .getPhoneNumber('3806543')
    recipientsPage
        .getEmailAddress('myemail@')
    recipientsPage
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn()
        .should('be.disabled')
    recipientsPage
        .getEmailAddress('myemail@ukr.net')
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
    recipientsPage
        .getInvalidFeadbackCity()
        .should('have.text','City required, at least 1 and no more than 100 characters')
    recipientsPage
        .getAddressLine1('dfdfsfsfsf')
    recipientsPage
        .getInvalidFeadbackZipCode()
        .should('have.text','Zip Code required, at least 5 numbers and no letters')
    recipientsPage
        .getStepNextBtn().should('be.disabled')
    recipientsPage
        .getAddressLine1('42 Bald Hill Street Dallas TX 75228')
    recipientsPage
        .getAddressLine2('1 George Lane Houston TX 77096')
    recipientsPage
        .getState().select('Texas')
    recipientsPage
        .getCity('Texas')
    recipientsPage
        .getZipCode('123')
        recipientsPage
        .getInvalidFeadbackZipCode()
        .should('have.text','Zip Code required, at least 5 numbers and no letters')  
    recipientsPage
        .getStepNextBtn().should('be.disabled')
    recipientsPage
        .getZipCode('75208')
    recipientsPage
        .getStepNextBtn()
        .should('be.enabled')
        .click()
    //recipient list
    recipientsPage
        .getThirthStep()
        .should('have.class','active')
    recipientsPage
        .getRecipientListCompany()
        .should('have.text','live')
    recipientsPage
        .getRecipientListFirstName()
        .should('have.text','Kriss')
    recipientsPage
        .getRecipientListLastName()
        .should('have.text','Shaboo')
    recipientsPage
        .getRecipientListPhone()
        .should('have.text','3806543')
    recipientsPage
        .getRecipientListEmail()
        .should('have.text','myemail@ukr.net')
    recipientsPage
        .getRecipientListAddress1()
        .should('have.text','42 Bald Hill Street Dallas TX 75228')
    recipientsPage
        .getRecipientListAddress2()
        .should('have.text','1 George Lane Houston TX 77096')
    recipientsPage
        .getRecipientListState()
        .should('have.text','Texas')
    recipientsPage
        .getRecipientListCity()
        .should('have.text','Texas')
    recipientsPage
        .getRecipientListZipCode()
        .should('have.text','75208')
    recipientsPage
        .getSubmitBtn()
        .click()
  })
  it.only('Should check full form edit/view  recipient', () => {
    cy.viewport(1000, 800)
    cy.login()
    const statusPage = new StatusPage()
    statusPage.visit()
    let recipientsPage = new RecipientsPage()
    recipientsPage
        .getRecipiensList()
        .click()
    const recipientDasboard = new RecipientDashboardPage()
    recipientDasboard
        .getEditViewBtn()
        .click()
   recipientDasboard
        .getCompanyName()
        .should('have.value','live')
   recipientDasboard
        .getContactFirstName()
        .should('have.value','Kriss')
   recipientDasboard
        .getContactLastName()
        .should('have.value','Shaboo')
  recipientDasboard
        .getPhoneNumber()
        .should('have.value','3806543')
   recipientDasboard
        .getEmailAdress()
        .should('have.value','myemail@ukr.net')
    recipientDasboard
        .getNextBtn()
        .click()
    recipientDasboard
        .getAddressLine1()
        .should('have.value','42 Bald Hill Street Dallas TX 75228')
    recipientDasboard
        .getAddressLine2()
        .should('have.value','1 George Lane Houston TX 77096')    
    recipientDasboard
        .getState()
        .should('have.value','Texas')   
    recipientDasboard
        .getCity()
        .should('have.value','Texas')  
    recipientDasboard
        .getZipCode()
        .should('have.value','75208')
    recipientDasboard
        .getNextBtn()
        .click()
    //recipient list
    recipientDasboard 
        .getRecipientListCompany()
        .should('have.text','live')
    recipientDasboard
        .getRecipientListFirstName()
        .should('have.text','Kriss')
    recipientDasboard
        .getRecipientListLastName()
        .should('have.text','Shaboo')
    recipientDasboard
        .getRecipientListPhone()
        .should('have.text','3806543')
    recipientDasboard
        .getRecipientListEmail()
        .should('have.text','myemail@ukr.net')
    recipientDasboard
        .getRecipientListAddress1()
        .should('have.text','42 Bald Hill Street Dallas TX 75228')
    recipientDasboard
        .getRecipientListAddress2()
        .should('have.text','1 George Lane Houston TX 77096')
    recipientDasboard
        .getRecipientListState()
        .should('have.text','Texas')
    recipientDasboard
        .getRecipientListCity()
        .should('have.text','Texas')
    recipientDasboard
        .getRecipientListZipCode()
        .should('have.text','75208')
    recipientDasboard
        .getSubmitBtn()
        .click()
  })
})