import {SignInPage} from './page-object/SignUpPage'
import HomePage from './page-object/HomePage'
describe('Sign in page and check inputs', () => {
  it('Should sign in via english language', () => {
    const home = new HomePage();
    home.visit();
    //visit sign in page
    const signin = new SignInPage()
    signin.visit()
    cy.wait(2000)
    //write invalid email
    signin.
        getEmail('dianagmail.com')
    cy.contains('This field must be a valid email address')
    //write invalid password
    signin.
      getPassword('12345')
    cy.contains('Password must have at least 8 characters, including at least one upper case letter, at least one lower case letter, and at least one number.')
    //write invalid confirm password
    signin
      .getConfirmPassword('123')
    cy.contains('Password does not match')
    signin
      .getCheckbox()
      .click()
    //check if button is disabled
    signin 
      .getCreateAccountBtn()
      .should('be.disabled')
    //write invalid email
    signin
      .getEmail('@gmail.com')
    cy.contains('This field must be a valid email address')
    //write empty password
    signin
      .getPassword('U12345678')
    cy.contains('Password must have at least 8 characters, including at least one upper case letter, at least one lower case letter, and at least one number.')
    signin
      .getConfirmPassword('231313')
    cy.contains('Password does not match')
    signin.getCheckbox()
    //check if button is disabled
    signin
      .getCreateAccountBtn()
      .should('be.disabled')
     //write valid email
     signin
     .getEmail('dianavarvadiuk@gmail.com')
     .getPassword('Tt12345678')
     .getConfirmPassword('Tt12345678')
     .getCheckbox()

     signin
      .getCreateAccountBtn()
      .click()
      .should('be.enabled')
  })
  it('Should sign in via ukrainian language', () => {
    const home = new HomePage();
    home.visit();
    //visit sign in page
    const signin = new SignInPage()
    signin.visit()
    signin
      .getLanguage()
      .click()
    cy.getIframeBody('.goog-te-menu-frame.skiptranslate')
      .last()
      .find('.goog-te-menu2 table tbody span:nth-child(2).text')
      .contains('українська')
      .click()
    cy.wait(2000)
    //write invalid email
    signin
     .getEmail('користувачgmail.com')
    cy.contains('Це поле має бути дійсною електронною адресою')
    //write invalid password
    signin
      .getPassword('53453')
    cy.contains('Пароль має містити принаймні 8 символів, включаючи принаймні одну літеру верхнього регістру, принаймні одну літеру нижнього регістру та принаймні одну цифру.')
    //write invalid confirm password
    signin
      .getConfirmPassword('34453')
    cy.contains('Пароль не збігається')
    signin 
      .getCheckbox()
      .click()
    //check if button is disabled
    signin
      .getCreateAccountBtn()
      .should('be.disabled')
    //write invalid email
    signin
      .getEmail('користувач')
    cy.contains('Це поле має бути дійсною електронною адресою')
    //write password
    signin
      .getPassword('Фф123456789')
    cy.contains('Пароль має містити принаймні 8 символів, включаючи принаймні одну літеру верхнього регістру, принаймні одну літеру нижнього регістру та принаймні одну цифру.')
    signin
      .getConfirmPassword('Фф12345678')
    cy.contains('Пароль не збігається')
    signin
      .getCheckbox()
    //check if button is disabled
    signin
      .getCreateAccountBtn()
      .should('be.disabled')
     //write valid email
     signin
      .getEmail('користувач@gmail.com')
      .getPassword('Ff123456789')
      .getConfirmPassword('Ff123456789')
      .getCheckbox()
     signin
      .getCreateAccountBtn().click()
       .should('be.enabled')

  })
})