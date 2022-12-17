import checkoutPage from "../pageObjects/checkout.page";
import cartPage from "../pageObjects/cart.page";
cy.faker = require('faker')

describe('Checkout Test Suite',()=>{
    beforeEach(() => {
        cy.visit('/')

        //Login
        cy.get("#signInOrRegister").click();
        
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get(`input[placeholder='yours@example.com']`).type("xyz@gmail.com");
                cy.get(`input[placeholder='your password']`).type("Pass123rd", { log: false });
                cy.get(".auth0-label-submit").click();
            }
        )
        cy.wait(3000)

        //add products to cart then proceed to checkout
        cartPage.addMultipleMugsToCart()
        cy.get('.snipcart-base-button__label').click()
    })

   

    it ('should complete billing form',()=>{
        cy.get(checkoutPage.billingForm).should('exist')
        cy.wait(2000)
        checkoutPage.completeBillingForm()
    }),

    //Negative Test
    it ('should attempt to proceed to payment without country field',()=>{
        checkoutPage.incompleteBillingForm()
        cy.get(checkoutPage.requireFieldMsg).should('include.text', 'required')
    }),

    it('should complete make payment',()=>{
        checkoutPage.completeBillingForm()

        cy.wait(2000)
        checkoutPage.completePaymentInfo()

        cy.wait(3000)
        cy.get(checkoutPage.invoiceTitle).should('exist')
        cy.get(checkoutPage.invoiceTotal).should('have.text','$60.00')

    })
})