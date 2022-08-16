export class AccountSettingPage{
    getChangeEmail(){
        return cy.get('#email')
    }
    getChangePhone(){
        return cy.get('#phone')
    }
    getInvalidPhoneFeadback(){
        return cy.contains('Phone Number required, at least 7 and no more than 18 numbers, including international country code')
    }
    getChangePassword(){
        return cy.get('#password')
    }
    getPasswordSaveBtn(){
        return cy.xpath('(//button[text()="Save"])[3]')
    }
    getCancelBtn(){
        return cy.get('button.btn-cancel')
    }
    getDefaultEmail(){
        return cy.get('app-multi-emails .email')
    }
    getInvalidEmailFeadback(){
        return cy.contains('Email Address required')
    }
    getCouponCode(){
        return cy.get('input[name="coupon"]')
    }
    getSaveBtn(){
        return cy.get('app-coupon-field button')
    }
    getInvalidFeadback(){
        return cy.contains('Coupon code invalid or expired')
    }
    getEmailSaveBtn(){
        return cy.xpath('(//button[text()="Save"])[1]')
    }
    getPhoneSaveBtn(){
        return cy.xpath('(//button[text()="Save"])[2]')
    }
    getOldPasswordPhone(){
        return cy.get('#oldPassword-phone')
    }
    getModalConfirmBtn(){
        return cy.get('.show .modal-body button')
    }

    getPasswordInvalidFeadback(){
        return cy.contains('Password required')
    }
    getOldPassword(){
        return cy.get('#oldPassword-email')
    }
    getWrongFeadback(){
        return cy.contains('Wrong password')
    }
    getEmailChangedOk(){
        return cy.get('.swal2-show .swal2-confirm')
    }
    getOldModalPassword(){
        return cy.get('.modal-sm #oldPassword-password')
    }
    getPasswordChangedOk(){
        return cy.get('.swal2-modal .swal2-confirm')
    }
    getCancelModalInput(){
        return cy.get('.cancel-service .password-input')
    }
    getHeaderModalCancel(){
        return cy.get('.cancel-service p:nth-child(1)')
    }
    getConfirmBtn(){
        return cy.get('.cancel-service  .confirm-btn')
    }
    getRecipientsEmail(){
        return cy.get('app-multi-emails input')
    }
    getRecipientsAccountSaveBtn(){
        return cy.xpath('(//button[text()="Save"])[4]')
    }
    getCloseEmail(){
        return cy.get('span .close')
    }
    getTwoListEmailClose(){
        return cy.get('span:nth-child(1) .close')
    }
    getFirstListEmailClose(){
        return cy.get('span:nth-child(2) .close')
    }
    getTurnOffEmailCheckbox(){
        return cy.get('input[name="turnOffAccountNoticeEmails"]')
    }
    getYesBtn(){
        return cy.get('.swal2-actions button:nth-child(1)')
    }
    
    getModalCancelBtn(){
        return cy.get('.swal2-actions button:nth-child(2)')
    }
}