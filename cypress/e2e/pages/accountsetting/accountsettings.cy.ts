import {StatusPage} from '../../page-object/StatusPage'
import {MerchantsPage} from '../../page-object/MerchantsPage'
import {AccountSettingPage} from '../../page-object/AccountSettingPage'
import {currentDefaults,defaultSettings,changePassword,noticeEmails} from './_defaults'
describe('Check validation for account settings', () => {
    beforeEach(()=>{
        currentDefaults()
        defaultSettings()
        changePassword()
        noticeEmails()
    })

    it('check basic validation for email,phone,password,Recipients of Account Notices',() => {
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        cy.url().should('include', '/status/me')
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
            .getChangeEmail()
            .should('have.value','varvadiukdidi+2@gmail.com')
        accountSettingPage
            .getChangePhone()
            .should('have.value','+380978654896')
        accountSettingPage
            .getChangePassword()
            .should('be.empty')
        accountSettingPage
            .getCancelBtn()
            .should('be.visible')
        accountSettingPage
            .getDefaultEmail()
            .should('have.text',' varvadiukdidi+2@gmail.com ')
    })
    it('check coupon code  validation ',() => {
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
            .getCouponCode()
            .should('be.empty')
        accountSettingPage
            .getSaveBtn()
            .should('be.disabled')
        accountSettingPage
             .getCouponCode()
             .type('sfasfa')
        accountSettingPage
             .getSaveBtn()
             .click()
        accountSettingPage
            .getInvalidFeadback()
    })
    it('check email validation ',() => {
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
        accountSettingPage
        .getChangeEmail()
        .should('have.value','varvadiukdidi+2@gmail.com')
        accountSettingPage
            .getEmailSaveBtn()
            .click()
        accountSettingPage
            .getModalConfirmBtn()
            .click()
        accountSettingPage
            .getPasswordInvalidFeadback()
        accountSettingPage
            .getOldPassword()
            .type('123122')
            .clear()
        accountSettingPage
            .getModalConfirmBtn()
            .click()
        accountSettingPage
            .getOldPassword()
            .type('Dd12345678')
        accountSettingPage
            .getModalConfirmBtn()
            .click()
        accountSettingPage
            .getEmailChangedOk()
            .click()
        accountSettingPage
            .getChangeEmail()
            .type('idi@gmailcom')
        accountSettingPage
            .getEmailSaveBtn()
            .click()
        accountSettingPage
            .getInvalidEmailFeadback()
        accountSettingPage
            .getChangeEmail()
            .type('idigmail.com')
        accountSettingPage
            .getEmailSaveBtn()
            .click()
        accountSettingPage
            .getInvalidEmailFeadback()
        accountSettingPage
            .getChangeEmail()
            .clear()
            .type('varvadiukdidi+2@gmail.com')
        accountSettingPage
            .getEmailSaveBtn()
            .click()
            accountSettingPage
            .getModalConfirmBtn()
            .click()
        accountSettingPage
            .getOldPassword()
            .type('Dd12345678')
        accountSettingPage
            .getModalConfirmBtn()
            .click()
        accountSettingPage
            .getEmailChangedOk()
            .click()
    })
    it('check phone validation ',() => {
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
            .getChangePhone()
            .clear()
            .type('+')
        accountSettingPage
            .getPhoneSaveBtn()
            .click()
        accountSettingPage
            .getInvalidPhoneFeadback()
        accountSettingPage
            .getChangePhone()
            .clear()
            .type('+7868687678')
        accountSettingPage
            .getPhoneSaveBtn()
            .click()
        accountSettingPage
             .getOldPasswordPhone()
             .clear()
             .type('Dd12345678')
        accountSettingPage
             .getModalConfirmBtn()
             .click()
        accountSettingPage
             .getEmailChangedOk()
             .click()
     })
     it('check password validation ',() => { 
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
            .getChangePassword()
            .type('575757')
        accountSettingPage 
            .getPasswordSaveBtn()
            .click()
        accountSettingPage
            .getPasswordInvalidFeadback()
        accountSettingPage
            .getChangePassword()
            .type('khjguguygu')
        accountSettingPage 
            .getPasswordSaveBtn()
            .click()
        accountSettingPage
            .getPasswordInvalidFeadback()
        accountSettingPage
            .getChangePassword()
            .type('85858588')
        accountSettingPage 
            .getPasswordSaveBtn()
            .click()
        accountSettingPage
            .getPasswordInvalidFeadback()
        accountSettingPage
            .getChangePassword()
            .type('Dd12345678')
        accountSettingPage 
            .getPasswordSaveBtn()
            .click()
        accountSettingPage
            .getOldModalPassword()
            .type('123122')
        accountSettingPage
            .getModalConfirmBtn()
            .click()
        accountSettingPage
            .getChangePassword()
            .clear()
            .type('Dd12345678')
        accountSettingPage 
            .getPasswordSaveBtn()
            .click()
        accountSettingPage
            .getOldModalPassword()
            .clear()
            .type('Dd12345678')
        accountSettingPage
            .getModalConfirmBtn()
            .click()
       
    })
     it('check cancel btn validation ',() => { 
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
            .getCancelBtn()
            .should('be.visible')
            .click()
        accountSettingPage
            .getHeaderModalCancel()
            .should('have.text','To confirm the cancellation of your service, please enter your password. Then, press the CONFIRM button.')
        accountSettingPage
            .getConfirmBtn()
        accountSettingPage
            .getCancelBtn()
            .click()
        accountSettingPage
            .getCancelModalInput()
})
    it('check Recipients of Account Notices validation ',() => { 
        cy.login()
        const statusPage = new StatusPage()
        statusPage
          .visit()
        const merchantsPage = new MerchantsPage()
        merchantsPage
            .getAccountSettingBtn()
            .click()
        const accountSettingPage = new AccountSettingPage()
        accountSettingPage
            .getRecipientsEmail()
            .should('be.empty')
        accountSettingPage
            .getRecipientsAccountSaveBtn()
            .click()
            accountSettingPage
            .getRecipientsEmail()
            .type('diana@gmail.com')
        accountSettingPage
            .getRecipientsAccountSaveBtn()
            .click()
        accountSettingPage
            .getCloseEmail()
            .should('be.visible')
        accountSettingPage
            .getTwoListEmailClose()
            .click()
        accountSettingPage
            .getDefaultEmail()
            .should('not.have.class','close')
        accountSettingPage
            .getTurnOffEmailCheckbox()
            .check()
        accountSettingPage
            .getModalCancelBtn()
            .click()
        accountSettingPage
            .getTurnOffEmailCheckbox()
            .should('not.be.checked')
        })
})