export class RecipientsPage{
    getRecipiensList(){
        return cy.get('.sidebar ul:nth-child(1) a[title="Recipients"]')
    }
    getNewRecipientsBtn(){
        return cy.get('app-recipients .custom-btn-green')
    }
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
        // field.clear()
        // field.type(value)
        // return this
        
    }
    getState(){

        return cy.get('.modal.show select[formcontrolname="state"]')
    }
    focusCity(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="city"]')
    }
    getCity(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="city"]')
        // field.clear()
        // field.type(value)
        // return this

    }
    getInvalidFeadbackCity(){
        return cy.contains('City required, at least 1 and no more than 100 characters')
        
    }
    focusZipCode(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="zipCode"]')
   
    }
    getZipCode(){

        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="zipCode"]')
        // field.clear()
        // field.type(value)
        // return this
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
    getRecipientListCompany(){
        return cy.get('.modal.show .recipient-list li:nth-child(1) b')
    }
    getRecipientListFirstName(){
        return cy.get('.modal.show .recipient-list li:nth-child(2) b')
    }
    getRecipientListLastName(){
        return cy.get('.modal.show .recipient-list li:nth-child(3) b')
    }
    getRecipientListPhone(){
        return cy.get('.modal.show .recipient-list li:nth-child(4) b') 
    }
    getRecipientListEmail(){
        return cy.get('.modal.show .recipient-list li:nth-child(5) b') 
    }
    getRecipientListAddress1(){
        return cy.get('.modal.show .recipient-list li:nth-child(6) b') 
    }
    getRecipientListAddress2(){
        return cy.get('.modal.show .recipient-list li:nth-child(7) b') 
    }
    
    getRecipientListState(){
        return cy.get('.modal.show .recipient-list li:nth-child(8) b') 
    }
    getRecipientListCity(){
        return cy.get('.recipient-list li:nth-child(9) b') 
    }
    getRecipientListZipCode(){
        return cy.get('.modal.show .recipient-list li:nth-child(10) b') 
    }
    getSubmitBtn(){
        return cy.get('.modal.show app-stepper-footer button.prev-step')
    }
    getDeleteBtn(){
        return cy.get('app-recipients button.btn-danger')
    }
    getModal(){
        return cy.get('.swal2-show[role="dialog"]')
    }
    getModalDeleteBtn(){
        return cy.get('.swal2-actions button:nth-child(1)')
    }
    getSuccessMessage(){
        return cy.get('h2.swal2-title')
    }
}
