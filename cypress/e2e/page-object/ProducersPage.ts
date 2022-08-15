export class ProducersPage{
    getListProducers(){
        return cy.get('.sidebar-nav li:nth-child(4) a[title="Producers"]')
    }
    getNewProducers(){
        return cy.get('app-create-user .custom-btn-green')
    }
}