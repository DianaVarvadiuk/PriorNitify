import {StatusPage} from './page-object/StatusPage'
import {ProductsPage} from './page-object/ProductsPage'
describe('Create  new products', () => {
    beforeEach(()=>{
        cy.clearLocalStorage('loggedInUserData')
        cy.clearLocalStorage('token')
        cy.viewport(1920, 1080)
        cy.intercept('POST',/\/products/,{fixture: 'interceptPostProductsFixtures.json'}).as('PostProducts-Fixtures')
        cy.intercept('GET','assortmentsProducts/?page=1&perPage=10',{fixture: 'interceptGetProductsPageFixtures.json'}).as('ProductsPage-Fixtures')
    })
    it('Should check validation form add products', () => {
      cy.login()
      const statusPage = new StatusPage()
      statusPage.visit()
      const productsPage = new ProductsPage()
      productsPage
        .getProductsList()
        .click()
      productsPage
        .getNewProductsBtn()
        .click()
      productsPage
       .getFirstStep()
       .should('have.class','active')
        
      productsPage
        .getSingleTypeCheckbox()
        .click()
      productsPage
        .getNextBtn()
        .click()
     productsPage
        .getFocusName()
        .focus()
    productsPage
        .getInvalidFedbackName()
        .should('have.text','Product name is required')
    productsPage
        .getFocusDescription()
        .focus()
    productsPage
        .getInvalidFedbackDescription()
        .should('have.text','Product description is required')
    productsPage
        .getFocusFDAcode()
        .focus()
    productsPage
        .getInvalidFedbackFDAcode()
        .should('have.text','FDA Product Code is invalid')
    //not valid data
    productsPage
        .getName()
        .type('fgf')
    productsPage
        .getDescription()
        .type('7867878678')
    productsPage
        .getOptionalId()
        .type('jhgjgj')
    productsPage
        .getOriginCountry().select('Togo  (TG)')
        
    productsPage
        .getFDAcode()
        .type('2312')
    productsPage
        .getInvalidFedbackFDAcode()
        .should('have.text','FDA Product Code is invalid')
    //women's sneakers
    productsPage
        .getNextBtn()
        .should('be.disabled')
    productsPage
        .getName()
        .clear()
        .type('Womens sneakers')
    productsPage
        .getDescription()
        .clear()
        .type('Кроссовки Adidas Lite Racer 3.0 GW0374 40.5 (7UK) 25.5 см Almpnk/Silvmt/Ftwwht (4065418291811)')
    productsPage
        .getOptionalId()
        .clear()
        .type('12346')
    productsPage
        .getFDAcode()
        .clear()
        .type('32 A C I 01')
        productsPage
        .getNextBtn()
        .should('be.enabled')
        .click()
    productsPage
        .getLastStep().should('have.class','completed')
    productsPage
        .getRadioMerchantYes().should('not.be.checked')
    productsPage
        .getRadioShipperYes().should('not.be.checked')
    productsPage
        .getRadioMerchantNo().should('be.checked')
    productsPage
        .getRadioShipperNo().should('be.checked')
    productsPage
        .getNextBtn()
        .should('be.enabled')
        .click()
    productsPage 
    .getThirthStep()
    .should('have.class','completed')
    productsPage
        .getCheckboxProduct()
        .check()
    productsPage
        .getInputProductPackaging()
        .should('be.disabled')
    productsPage
        .getPoundsRadioBtn() 
        .should('be.disabled')
    productsPage
        .getOuncesRadioBtn()
        .should('be.disabled')
    productsPage
        .getGramsRadioBtn()
        .should('be.disabled')    
    productsPage
        .getKilogramsRadioBtn()
        .should('be.disabled')
    productsPage
        .getLitersRadioBtn()
        .should('be.disabled')
    productsPage
        .getSubmitBtn()
        .click()


    })

})