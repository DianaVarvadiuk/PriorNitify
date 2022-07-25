
export class SubscribePage{
    visit(){
        cy.visit('/activate?key=2c4e986449b4aaed03105f9c4c2f01626471d26f')
    }
   getPrice(){
    return cy.get('.planItem-top .value')
   }
   getPriorNoticeText(){
    return cy.get('.planItem-top div:nth-child(4)')
   }
   getSubscribeBtn(){
    return cy.get(' button.subcribe')
   }
   getSubscribeFormBtn(){
    return cy.get('.btn-primary')
   }
   getCompanyName(value){
    const field = cy.get('.form-group input[formcontrolname="company"]')
    field.clear()
    field.type(value)
    return this
   }
   getInvalidFeedbackCompany(){
    return cy.contains('Company Name required, at least 3 and no more than 100 characters')
    }
 
   getFocusFirstName(){
    const field = cy.get('.form-group input[formcontrolname="firstName"]')
    field.focus()
    return this
   }
   getFirstName(value){
     const field = cy.get('.form-group input[formcontrolname="firstName"]')
     field.clear()
    field.type(value)
    }
   getInvalidFeedbackFirstName(){
    return cy.contains('First Name required, at least 1 and no more than 50 characters')
    }
   getFocusLastName(){
    const field = cy.get('.form-group input[formcontrolname="lastName"]')
    field.focus()
    return this
   }
   getLastName(value){
    const field = cy.get('.form-group input[formcontrolname="lastName"]')
    field.clear()
    field.type(value)
    return this
   }

   getInvalidFeedbackLastName(){
    return cy.contains('Last Name required, at least 1 and no more than 50 characters')
    }

}
