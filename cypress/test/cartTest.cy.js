import cartPage from "../pageObjects/cart.page";
import prodGalleryPage from "../pageObjects/prodGallery.page"

describe('Add to cart Test Suite', ()=>{
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
          //Add items to cart and navigate to cart
          cy.wait(4000) //wait for the page to load
          cy.get(`#product-0 > #add-to-cart`).click()//Add fitted hat to cart
    })

    it ('should remove item from cart',()=>{
        //check that the page has the product added
        //cy.get('.snipcart-item-line__title').contains(' Quality Fitted Hat ')

        //Remove item from cart
        cy.wait(1500)
        cartPage.removeFromCart()
        cy.get(cartPage.emptyCartMsg).should('exist')

        //return to store
        cartPage.continueShoppingBtn.click()
    }),

    it('should increment then decrement item qty in cart',()=>{      
          
          //increment item in cart to 3
          cartPage.increaseProdQty3()
          cy.get(`.snipcart-item-quantity__quantity.snipcart__font--std`).contains('3')

         //decrement item in cart by 1
         cartPage.decrementItemQty()
         cy.get(`.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary`).should('include.text', '$60.00')

    }),

    it('should navigate to checkout from the cart',()=>{
        cartPage.goToCheckout()
        //check that the url is for the checkout page
        cy.url().should('include','/products#/checkout')
        cy.get(`div[class='snipcart__box']`).should('be.visible')//check that the billing form is visible
    })
})