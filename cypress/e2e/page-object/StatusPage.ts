export class StatusPage {
  getModal() {
    return cy.get(".swal2-actions button:nth-child(1)");
  }
  visit() {
    cy.visit("/status");
  }
  getCountry() {
    return cy.get(".ng-value-container");
  }
  getAndorra() {
    return cy.get(".ng-dropdown-panel-items div:nth-child(5)");
  }
  getCityFocus() {
    const field = cy.get('.form-group input[formcontrolname="city"]');
    field.focus();
    field.click();
    return this;
  }
  getCity(value) {
    const field = cy.get('.form-group input[formcontrolname="city"]');
    field.clear();
    field.type(value);
    return this;
  }
  getInvalidFeedbackCity() {
    return cy.contains(
      "City required, at least 1 and no more than 100 characters"
    );
  }
  getFocusAdress() {
    const field = cy.get('.form-group input[formcontrolname="address"]');
    field.focus();
  }
  getAdress(value) {
    const field = cy.get('.col-md-6 input[formcontrolname="address"]');
    field.clear();
    field.type(value);
    return this;
  }
  getInvalidFeedbackAdress() {
    return cy.contains(
      "Address Line 1 required, at least 1 and no more than 100 characters"
    );
  }
  getZIPPostalCodeFocus() {
    const field = cy.get('.form-group input[formcontrolname="postal_code"]');
    field.focus();
  }
  getZIPPostalCode(value) {
    const field = cy.get('.form-group input[formcontrolname="postal_code"]');
    field.clear();
    field.type(value);
    return this;
  }
  getInvalidFeedbackZIPPostal() {
    return cy.contains(
      "ZIP/Postal Code required, at least 1 and no more than 15 characters"
    );
  }
  //ZIP/Postal Code required, at least 1 and no more than 15 characters
  getPhoneFocus() {
    const field = cy.get('.form-group input[formcontrolname="fdaPhoneNumber"]');
    field.focus();
  }
  getPhone(value) {
    const field = cy.get('.form-group input[formcontrolname="fdaPhoneNumber"]');
    field.clear();
    field.type(value);
    return this;
  }
  getInvalidFeedbackPhone() {
    return cy.contains(
      "Phone Number required, at least 7 and no more than 18 numbers, including international country code"
    );
  }
  getRegistrationNumber(value) {
    const field = cy.get('input[formcontrolname="registration_number"]');
    field.clear();
    field.type(value);
    return this;
  }

  getSubmitBtn() {
    return cy.get(".btn-primary.float-right");
  }
  getClickHere() {
    return cy.get(".ng-touched a:nth-child(1)");
  }
  getCurrentPassword(value) {
    const field = cy.get('input[formcontrolname="currentPassword"]');
    field.type(value);
  }
  getConfirmBtn() {
    return cy.get(".modal-body button:nth-child(1)");
  }
  getSaveBtn() {
    return cy.get(".modal-body .text-center button");
  }
}
