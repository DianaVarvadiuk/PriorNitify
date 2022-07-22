export class StatusPage{
    getModal(){
        return cy.get('.swal2-actions button:nth-child(1)')
    }
}