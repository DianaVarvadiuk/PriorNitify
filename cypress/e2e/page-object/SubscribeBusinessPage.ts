export class SubscribeBusinessPage{
     
    getProducerTitle(){
         return cy.get('.producer .text-center')
    }

    //userTypes-submit[]
    getProducerSubmit(){
        return cy.get('.producer .userTypes-submit')
    }
 
    getMerchantTitle(){
        return cy.get('.merchant .text-center')
    }
    getMerchantSubmit(){
        return cy.get('.merchant .userTypes-submit')
    }

    getShipperTitle(){
        return cy.get('.shipper .text-center')
    }
    getShipperSubmit(){
        return cy.get('.shipper .userTypes-submit')
    }
    
}