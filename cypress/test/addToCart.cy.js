import cartPage from "../pageObjects/cart.page";


describe('Add to cart Test suite', ()=>{
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
    })

    it('should add a single item to cart from the product page', ()=>{
        cartPage.addSingleMugToCart()
        cy.get(cartPage.cartHeader).should('include.text','Cart')
        cy.get(cartPage.cartItemTitle).should('have.text',' Quality Mug ')

    }),

    it('should add multiple items to cart from product page',()=>{
        cartPage.addMultipleMugsToCart()

        /*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified here
        */
        cy.get('.snipcart-item-quantity__quantity > .snipcart__font--secondary').contains('4')
        cy.get('.snipcart-summary-fees__amount').should('include.text', '$60.00')
    }),

    it('should add to cart then continue shopping',()=>{
        cartPage.addMultipleMugsToCart()
       
        /*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified here
        */
        cy.get(`.snipcart-modal__close-title`).should('be.visible')
        //return to product page
        cy.get('.snipcart-modal__close-title').click()
        cy.get('a > .chakra-heading').contains('Automation Camp Store')
    })
})