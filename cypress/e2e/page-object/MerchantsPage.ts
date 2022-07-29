export class MerchantsPage{
    visit(){
     cy.visit('/merchants')
    }
    getNewMerchantsBtn(){
        return cy.get('app-merchants button.custom-btn-green')
    }

    getCountry(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="country"]')
    }
    focusCompany(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="company"]')
    }
    getInvalidFeadbackCompany(){
        return cy.contains('Company Name required, at least 3 and no more than 100 characters')
    }
    getInvalidFeadbackZipCode(){
        return cy.contains('ZIP/Postal Code required, at least 1 and no more than 15 characters')
    }
    getNextBtn(){
        return cy.get('app-stepper > app-stepper-footer button')
    }
    getCheckboxValueOne(){
        return cy.get('.list-unstyled input[value="1"]')
    }
    getCheckboxValueTwo(){
        return cy.get('.list-unstyled input[value="2"]')
    }
    getCheckboxValueThree(){
        return cy.get('.list-unstyled input[value="3"]')
    }
    getCheckboxValueFour(){
        return cy.get('.list-unstyled input[value="4"]')
    }
    getCheckboxValueFife(){
        return cy.get('.list-unstyled input[value="5"]')
    }
    getCheckboxValueSix(){
        return cy.get('.list-unstyled input[value="6"]')
    }
    getCheckboxValueSeven(){
        return cy.get('.list-unstyled input[value="7"]')
    }
    getInputFdaCode(){
        return cy.get('form input[formcontrolname="fdaCode"]')
    }
    getAccountSettingBtn(){
        return cy.get('nav .fa-th')
    }
    getCardNumber(){
       
        //  return cy.get('.StripeElement input')
        return cy.get('form .StripeElement')
    }
    getModal(){
        return cy.get('div.swal2-modal button.swal2-confirm')
    }
    getMerchantsEditBtn(){
        return cy.get('app-merchants .text-center button.custom-btn')
    }
    getDeleteBtn(){
        return cy.get('app-merchants .text-center button.btn-danger')
    }
    getSuccessMessage(){
        return cy.get('h2.swal2-title')
    }
}