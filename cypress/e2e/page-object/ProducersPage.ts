export class ProducersPage{
    getListProducers(){
        return cy.get('.sidebar-nav li:nth-child(4) a[title="Producers"]')
    }
    getNewProducers(){
        return cy.get('app-create-user .custom-btn-green')
    }
    getCountry(){
        return cy.get('.modal.show app-user-form app-body-stepper [formcontrolname="country"]')
    }
    getInvalidFeadbackZipCode(){
        return cy.contains('ZIP/Postal Code required, at least 1 and no more than 15 characters')
    }
    getFourStep(){
        return cy.get('.modal.show app-stepper-header li:nth-child(4)')
    }
    getYesCheckbox(){
        return cy.get('app-body-stepper .container-left input')
    }
    getNoCheckbox(){
        return cy.get('app-body-stepper .container-left input')
    }
    getModalOkBtn(){
        return cy.get('.swal2-show .swal2-confirm')
    }
}