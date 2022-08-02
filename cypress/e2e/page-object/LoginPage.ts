export class LoginPage {
  visit() {
    return cy.visit("/login");
  }

  getLanguage() {
    return cy.get('div[id^=":0.targetLanguage"]');
  }
  getEmail(value) {
    const field = cy.get("#exampleInputEmail1");
    field.clear();
    field.type(value);

    return this;
  }
  getPassword(value) {
    const field = cy.get("#exampleInputPassword1");
    field.clear();
    field.type(value);

    return this;
  }
  getCheckbox() {
    return cy.get(".fa-check");
  }
  getLoginBtn() {
    return cy.get(".custom-btn");
  }
  getModalMessage() {
    return cy.get(".swal2-actions button");
  }
}
