import {StatusPage} from './page-object/StatusPage'
import {RecipientsPage} from './page-object/RecipientsPage'

describe('Create  new recipient', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
     })
  it('Should check validation form add recipient', () => {
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
    cy.viewport(1000, 800)
    //first page recipient
    recipientsPage
        .getFirstStep().should('have.class','active')
    recipientsPage
        .getCompany('rv')
    recipientsPage
        .focusLastName()
    recipientsPage
        .getInvalodFeadbackFirstName()
        .should('have.text','First Name required, at least 1 and no more than 50 characters')
    recipientsPage
        .focusPhoneNumber()
    recipientsPage
        .getInvalodFeadbackLastName()
        .should('have.text','Last Name required, at least 1 and no more than 50 characters')
    recipientsPage
        .focusFirstName()
    recipientsPage
        .getInvalodFeadbackEmail()
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
        .getInvalodFeadbackPhone()
        .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
    recipientsPage
        .getEmailAdress('myemail')
    recipientsPage
        .getInvalodFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn().should('be.disabled')
        recipientsPage
        .getPhoneNumber('3806543')
    recipientsPage
        .getEmailAdress('myemail@')
    recipientsPage
        .getInvalodFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn()
        .should('be.disabled')
    recipientsPage
        .getEmailAdress('myemail@ukr.net')
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
        .getInvalodFeadbackAdress1()
        .should('have.text','Address Line 1 required, at least 1 and no more than 100 characters')
    recipientsPage
        .focusZipCode()
    recipientsPage
        .getInvalodFeadbackCity()
        .should('have.text','City required, at least 1 and no more than 100 characters')
    recipientsPage
        .getAdressLine1('dfdfsfsfsf')
    recipientsPage
        .getInvalodFeadbackZipCode()
        .should('have.text','Zip Code required, at least 5 numbers and no letters')
    recipientsPage
        .getStepNextBtn().should('be.disabled')
    recipientsPage
        .getAdressLine1('42 Bald Hill Street Dallas TX 75228')
    recipientsPage
        .getAdressLine2('1 George Lane Houston TX 77096')
    recipientsPage
        .getState().select('Texas')
    recipientsPage
        .getCity('Texas')
    recipientsPage
        .getZipCode('123')
        recipientsPage
        .getInvalodFeadbackZipCode()
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
        .getRecipientListAdress1()
        .should('have.text','42 Bald Hill Street Dallas TX 75228')
    recipientsPage
        .getRecipientListAdress2()
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
})