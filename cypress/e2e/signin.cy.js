import {SignInPage} from './page-object/SignInPage.cy.js'
//import {getIframeBody} from '../support/iframe/index.cy'
describe('Sign in page and check inputs', () => {
  it('Should sign in via english language', () => {
    //visit sign in page
    const signin = new SignInPage()
    signin.visitSignInPage()
    //const getIframe = new getIframeBody()  
   
     signin.getLanguage().click()
    cy.getIframeBody().last().find('.goog-te-menu2  table td:nth-child(1) span:nth-child(2).text').last().click()
    //signin.getLanguageUA().click()
    cy.wait(2000)
    //signin.getLanguageUA().select('англійська')
    //write invalid email
    signin.getEmail().type('dianagmail.com')
    cy.contains('This field must be a valid email address')
    //write invalid password
    signin.getPassword().type('12345')
    cy.contains('Password must have at least 8 characters, including at least one upper case letter, at least one lower case letter, and at least one number.')
    //write invalid confirm password
    signin.getConfirmPassword().type('123')
    cy.contains('Password does not match')
    signin.getCheckbox().click()
    //check if button is disabled
    signin.getCreateAccountBtn().should('be.disabled')
    //write invalid email
    signin.getEmail().clear().type('@gmail.com')
    cy.contains('This field must be a valid email address')
    //write empty password
    signin.getPassword().clear().type('U12345678')
    cy.contains('Password must have at least 8 characters, including at least one upper case letter, at least one lower case letter, and at least one number.')
    signin.getConfirmPassword().clear().type('231313')
    cy.contains('Password does not match')
    signin.getCheckbox().click()
    //check if button is disabled
    signin.getCreateAccountBtn().should('be.disabled')
     //write valid email
     signin.getEmail().clear().type('dianavarvadiuk@gmail.com')
     signin.getPassword().clear().type('Tt12345678')
     signin.getConfirmPassword().clear().type('Tt12345678')
     signin.getCheckbox().click() 
     signin.getCreateAccountBtn().click().should('be.enabled')
     //signin.getModalMessage().should('be.visable')

  })
  it('Should sign in via ukrainian language', () => {
    //visit sign in page
    const signin = new SignInPage()
    signin.visitSignInPage()
    //const getIframe = new getIframeBody()  
    // signin.getLanguage().click()
    //  cy.getIframeBody().find('div[id^=":0.targetLanguage"]').click()
    // signin.getLanguageUA().select(2)
    cy.wait(2000)
    //signin.getLanguageUA().select('українська')
    //write invalid email
    signin.getEmail().type('користувачgmail.com')
    cy.contains('Це поле має бути дійсною електронною адресою')
    //write invalid password
    signin.getPassword().type('53453')
    cy.contains('Пароль має містити принаймні 8 символів, включаючи принаймні одну літеру верхнього регістру, принаймні одну літеру нижнього регістру та принаймні одну цифру.')
    //write invalid confirm password
    signin.getConfirmPassword().type('34453')
    cy.contains('Пароль не збігається')
    signin.getCheckbox().click()
    //check if button is disabled
    signin.getCreateAccountBtn().should('be.disabled')
    //write invalid email
    signin.getEmail().clear().type('користувач')
    cy.contains('Це поле має бути дійсною електронною адресою')
    //write password
    signin.getPassword().clear().type('Фф123456789')
    cy.contains('Пароль має містити принаймні 8 символів, включаючи принаймні одну літеру верхнього регістру, принаймні одну літеру нижнього регістру та принаймні одну цифру.')
    signin.getConfirmPassword().clear().type('Фф12345678')
    cy.contains('Пароль не збігається')
    signin.getCheckbox().click()
    //check if button is disabled
    signin.getCreateAccountBtn().should('be.disabled')
     //write valid email
     signin.getEmail().clear().type('користувач@gmail.com')
     signin.getPassword().clear().type('Ff123456789')
     signin.getConfirmPassword().clear().type('Ff123456789')
     signin.getCheckbox().click() 
     signin.getCreateAccountBtn().click().should('be.enabled')
     //signin.getModalMessage().should('be.visable')

  })
})