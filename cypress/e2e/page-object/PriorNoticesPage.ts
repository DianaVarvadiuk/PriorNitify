export class PriorNoticesPage{
    getListPriorNotices(){
        return cy.get('.sidebar-nav li:nth-child(3) a[title="Prior Notices"]')
    }
    getNewOrderBtn(){
        return cy.get('app-prior-notices .custom-btn-green')
    }
    selectRecipient(){
        return cy.get('.mb-3 ng-select .ng-select-container')
    }
    getThreeRecipient(){
        return cy.get('ng-dropdown-panel div:nth-child(3)')
    }
    getRecipientCompany(){
        return cy.get('.col-sm-12 li:nth-child(1) b')
    }
    getRecipientContactName(){
        return cy.get('.col-sm-12 li:nth-child(2) b')
    }
    getRecipientAddress1(){
        return cy.get('.col-sm-12 li:nth-child(3) b')
    }
    getRecipientAddress2(){
        return cy.get('.col-sm-12 li:nth-child(4) b')
    }
    getRecipientCity(){
        return cy.get('.col-sm-12 li:nth-child(5) b')
    }
    getRecipientState(){
        return cy.get('.col-sm-12 li:nth-child(6) b')
    }
    getRecipientCode(){
        return cy.get('.col-sm-12 li:nth-child(7) b')
    }
    getRecipientEmail(){
        return cy.get('.col-sm-12 li:nth-child(8) b')
    }
    getRecipientPhone(){
        return cy.get('.col-sm-12 li:nth-child(9) b')
    }
    getFooter(){
        return cy.get('app-stepper-footer')
    }
}