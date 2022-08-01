export class MerchantsPage{
    visit(){
     cy.visit('/merchants')
    }
    getNewMerchantsBtn(){
        return cy.get('app-merchants button.custom-btn-green')
    }
}