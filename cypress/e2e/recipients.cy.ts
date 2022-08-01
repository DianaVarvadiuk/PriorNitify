import {StatusPage} from './page-object/StatusPage'
import {RecipientDashboardPage} from './page-object/RecipientDashboardPage'
import {RecipientsPage} from './page-object/RecipientsPage'
describe('Create  new recipient', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        cy.intercept('GET',/\/users\/current/,{fixture: 'interceptCurrentRecipientsFixtures.json'}).as('GetCurrent-Fixtures')
        cy.intercept('POST',/\/recipients/, { fixture: 'interceptRecipientsFixtures.json' }).as('PostRecipients-Fixtures')
        cy.intercept('GET',/\/recipients\/[\w]{1,}/,{fixture: 'interceptRecipientsEditFixtures.json'}).as('GetRecipientsEdit-Fixtures')
        cy.intercept('GET','/recipients?page=1&perPage=10',{fixture: 'interceptRecipientsPageFixtures.json'}).as('GetRecipientsPage-Fixtures')
        cy.intercept('PUT',/\/recipients\/[\w]{1,}/,{fixture: 'interceptRecipientsPutFixtures.json'}).as('PutRecipientsEdit-Fixtures')
        cy.intercept('DELETE',/\/recipients\/[\w]{1,}/,{fixture: 'interceptRecipientsDeleteFixtures.json'}).as('DeleteRecipientsEdit-Fixtures')
        cy.viewport(1920, 1080)
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
    //first page recipient
    recipientsPage
        .getFirstStep().should('have.class','active')
    recipientsPage
        .getCompany()
        .clear()
        .type('rv')
    recipientsPage
        .focusLastName()
        .focus()
    recipientsPage
        .getInvalidFeadbackFirstName()
        .should('have.text','First Name required, at least 1 and no more than 50 characters')
    recipientsPage
        .focusPhoneNumber()
        .focus()
    recipientsPage
        .getInvalidFeadbackLastName()
        .should('have.text','Last Name required, at least 1 and no more than 50 characters')
    recipientsPage
        .focusFirstName()
        .focus()
    recipientsPage
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn().should('be.disabled')
    recipientsPage
        .getCompany()
        .clear()
        .type('live')
    recipientsPage
        .getFirstName()
        .clear()
        .type('Kriss')
    recipientsPage
        .getLastName()
        .clear()
        .type('Shaboo')
    recipientsPage
        .getPhoneNumber()
        .clear()
        .type('466')
    recipientsPage
        .getInvalidFeadbackPhone()
        .should('have.text','Phone Number required, at least 7 and no more than 18 numbers, including international country code')
    recipientsPage
        .getEmailAddress()
        .clear()
        .type('myemail')
    recipientsPage
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn().should('be.disabled')
        recipientsPage
        .getPhoneNumber()
        .clear()
        .type('3806543')
    recipientsPage
        .getEmailAddress()
        .clear()
        .type('myemail@')
    recipientsPage
        .getInvalidFeadbackEmail()
        .should('have.text','Email Address required')
    recipientsPage
        .getNextBtn()
        .should('be.disabled')
    recipientsPage
        .getEmailAddress()
        .clear()
        .type('myemail@ukr.net')
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
        .getAddressLine1()
        .clear()
        .type('dfdfsfsfsf')
    recipientsPage
        .getInvalidFeadbackZipCode()
        .should('have.text','Zip Code required, at least 5 numbers and no letters')
    recipientsPage
        .getStepNextBtn().should('be.disabled')
    recipientsPage
        .getAddressLine1()
        .clear()
        .type('42 Bald Hill Street Dallas TX 75228')
    recipientsPage
        .getAddressLine2()
        .clear()
        .type('1 George Lane Houston TX 77096')
    recipientsPage
        .getState().select('Texas')
    recipientsPage
        .getCity()
        .clear()
        .type('Texas')
    recipientsPage
        .getZipCode()
        .clear()
        .type('123')
        recipientsPage
        .getInvalidFeadbackZipCode()
        .should('have.text','Zip Code required, at least 5 numbers and no letters')  
    recipientsPage
        .getStepNextBtn().should('be.disabled')
    recipientsPage
        .getZipCode()
        .clear()
        .type('75208')
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
  it('Should check full form edit/view  recipient', () => {
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
    recipientsPage
        .getCompany()
        .should('have.value','live')
    recipientsPage
        .getFirstName()
        .should('have.value','Kriss')
    recipientsPage
        .getLastName()
        .should('have.value','Shaboo')
    recipientsPage
        .getPhoneNumber()
        .should('have.value','3806543')
    recipientsPage
        .getEmailAddress()
        .should('have.value','myemail@ukr.net')
    recipientsPage
        .getNextBtn() 
        .click()     
    recipientsPage
        .getAddressLine1()
        .should('have.value','42 Bald Hill Street Dallas TX 75228')
    recipientsPage
        .getAddressLine2()
        .should('have.value','1 George Lane Houston TX 77096')    
    recipientsPage
        .getState()
        .should('have.value','Texas')   
    recipientsPage
        .getCity()
        .should('have.value','Texas')  
    recipientsPage
        .getZipCode()
        .should('have.value','75208')
    recipientsPage
        .getNextBtn()
        .click()
    //recipient list
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
 it('Should delete recipient', () => {
    cy.login()
    const statusPage = new StatusPage()
    statusPage.visit()
    const  recipientsPage = new RecipientsPage()
    recipientsPage
        .getRecipiensList()
        .click()
    recipientsPage
        .getDeleteBtn()
        .click()
    recipientsPage
        .getModal()
        .should('be.visible')
    recipientsPage
        .getModalDeleteBtn()
        .click()
    cy.wait(2000)
    recipientsPage
        .getSuccessMessage()
        .should('contain','Recipient has been successfully deleted!')
 })
})
