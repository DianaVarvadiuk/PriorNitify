export class ShippersPage{
    visit(){
     cy.visit('/shippers')
    }
    getNewShippersBtn(){
        return cy.get('app-create-user button.custom-btn-green')
    }
    getShippersEditBtn(){
        return cy.get('app-shippers .text-center button.custom-btn')
    }
    getDeleteBtn(){
        return cy.get('app-shippers .text-center button.btn-danger')
    }
    getSuccessMessage(){
        return cy.get('.swal2-header h2#swal2-title')
    }
}