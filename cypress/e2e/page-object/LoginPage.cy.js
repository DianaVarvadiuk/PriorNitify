 export class LoginPage{
  visitLoginPage(){
    return cy.visit('https://dev-login.priornotify.com/login')
  }

  getEmail(){
    return cy.get('#exampleInputEmail1')
  }
  getPassword(){
    return cy.get('#exampleInputPassword1')
  }
  getCheckbox() {
    return cy.get('.fa-check')
  }
  getLoginBtn(){
    return cy.get('.custom-btn')
  }
  getModalMessage()
    {
       return cy.get('.swal2-actions button')
    }
}