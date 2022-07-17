export class SignInPage {
    visitSignInPage(){
        cy.visit('/register')
    }
    getLanguage(){
       return cy.get('div[id^=":0.targetLanguage"]')
    }
    getLanguageUA(){
        return cy.get('.goog-te-menu-value span:nth-child(1)')
    }
    getEmail(){
       return cy.get('input[name="account_email"]')
    }
    getTextDanger(){
        return cy.get('.text-danger')
    }
    getPassword(){
        return cy.get('input[name="password"]')
    }
    getConfirmPassword(){
        return cy.get('input[name="confirmPassword"]')
}
    getCheckbox(){
        return cy.get('.fa-check')
    }
    getCreateAccountBtn(){
        return cy.get('.custom-btn')
    }
}