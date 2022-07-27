export class MerchantsPage{
    visit(){
     cy.visit('https://dev-login.priornotify.com/merchants')
    }
    getNewMerchantsBtn(){
        return cy.get('app-merchants button.custom-btn-green')
    }
}