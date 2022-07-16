import {LoginPage} from './page-object/LoginPage.cy'
const email = Cypress.env('email')
const password = Cypress.env('password')
describe('Log in on page and check inputs', () => {

  it('Should log in the page via  english language', () => {
   //visit log in page
   const logIn = new LoginPage()
   logIn.visitLoginPage()
   //write invalid email
   logIn.getEmail().type('diana@gmailcom')
   cy.contains('This field must be a valid email address')
    //write invalid password
   logIn.getPassword().click()
   logIn.getCheckbox().click()
   cy.contains('This field is required')
   logIn.getLoginBtn().should('be.disabled')
   //write invalid email
   logIn.getEmail().click().clear().type('dianagmail.com')
   cy.contains('This field must be a valid email address')
    //write invalid password
   logIn.getPassword().clear().type('12344567')
   logIn.getCheckbox().click()
   logIn.getLoginBtn().should('be.disabled')
   //write valid email
   logIn.getEmail().clear().type(email)
   //write valid password
   logIn.getPassword().clear().type(password)
    //logIn.getCheckbox().click()
   //click login
   logIn.getLoginBtn().click()
   //check base url
   cy.url().should('include','https://dev-login.priornotify.com/')
  })
  it('Should log in the page via  ukrainian language', () => {
    //visit log in page
    const logIn = new LoginPage()
    logIn.visitLoginPage()
    //write invalid email
    logIn.getEmail().type('1@gmail.com')
    //cy.contains('This field must be a valid email address')
     //write invalid password
    logIn.getPassword().type('1234567')
    logIn.getCheckbox().click()
    logIn.getLoginBtn()
    //write invalid email
    logIn.getEmail().click().clear().type('діана')
    cy.contains('Це поле має бути дійсною електронною адресою')
     //write invalid password
    logIn.getPassword().clear().type('12344567')
    logIn.getLoginBtn().should('be.disabled')
    //write valid email
    logIn.getEmail().clear().type(email)
    //write valid password
    logIn.getPassword().clear().type(password)
     //logIn.getCheckbox().click()
    //click login
    logIn.getLoginBtn().click()
    //check base url
    cy.url().should('include','https://dev-login.priornotify.com/')
   })
})