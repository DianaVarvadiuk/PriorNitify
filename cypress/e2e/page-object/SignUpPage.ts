export class SignInPage {
    visit(){
        cy.visit('/register')
    }
    getLanguage(){
       return cy.get('div[id^=":0.targetLanguage"]')
    }

    getEmail(value){
       const field = cy.get('input[name="account_email"]')
       field.clear()
       field.type(value)

       return this
    }
    getTextDanger(){
        return cy.get('.text-danger')
    }
    getPassword(value){
        const field = cy.get('input[name="password"]')
        field.clear()
        field.type(value)

        return this
    }
    getConfirmPassword(value){
        const field= cy.get('input[name="confirmPassword"]')
        field.clear()
        field.type(value)

        return this
}
    getCheckbox(){
        return cy.get('.fa-check')
    }
    getCreateAccountBtn(){
        return cy.get('.custom-btn')

    }
}