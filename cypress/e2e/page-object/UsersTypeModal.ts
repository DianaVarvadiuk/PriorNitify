export class UsersTypeModal{
    getFirstStep(){
        return cy.get('app-stepper-header li:nth-child(1)')
    }
    getCompany(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="company"]')
    }
    getInvalidFeadbackCompany(){
        return cy.contains('Company Name required, at least 3 and no more than 100 characters')
    }
    focusFirstName(){
        return  cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="firstName"]')
    }
    getFirstName(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="firstName"]')
    }
    getInvalidFeadbackFirstName(){
        return cy.contains('First Name required, at least 1 and no more than 50 characters')
    }
    focusLastName(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="lastName"]')
        
    }
    getLastName(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="lastName"]')
    }
    getInvalidFeadbackLastName(){
        return cy.contains('Last Name required, at least 1 and no more than 50 characters')
    }
    focusPhoneNumber(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="phone"]')
        
    }
    getPhoneNumber(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="phone"]')
    }
    getInvalidFeadbackPhone(){
        return cy.contains('Phone Number required, at least 7 and no more than 18 numbers, including international country code')
    }
    focusEmailAddress(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="email"]')
      
    }
    getEmailAddress(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="email"]')
    }
    getInvalidFeadbackEmail(){
        return cy.contains('Email Address required')
    }
    getNextBtn(){
        return cy.get('.modal.show app-stepper-footer button')
    }
    getLastStep(){
        return cy.get('.modal.show app-stepper-header li:nth-child(1)')
    }
    focusAdressLine1(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="address1"]')
    }
    getAddressLine1(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="address1"]')

    }
    getInvalidFeadbackAdress1(){
        return cy.contains('Address Line 1 required, at least 1 and no more than 100 characters')
    }
    getAddressLine2(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="address2"]')
        
    }
    getState(){

        return cy.get('.modal.show select[formcontrolname="state"]')
    }
    focusCity(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="city"]')
    }
    getCity(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="city"]')
    }
    getInvalidFeadbackCity(){
        return cy.contains('City required, at least 1 and no more than 100 characters')
        
    }
    focusZipCode(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="zipCode"]')
   
    }
    getZipCode(){

        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="zipCode"]')

    }
    getInvalidFeadbackZipCode(){
        return cy.contains('Zip Code required, at least 5 numbers and no letters') 
    }
    getStepNextBtn(){
        return cy.get('.modal.show app-stepper-footer button.prev-step')
    }
    getThirthStep(){
            return cy.get('.modal.show app-stepper-header li:nth-child(3)')
    }
    getSubmitBtn(){
        return cy.get('.modal.show app-stepper-footer button.prev-step')
    }
    getModalDeleteBtn(){
        return cy.get('.swal2-actions button:nth-child(1)')
    }

}