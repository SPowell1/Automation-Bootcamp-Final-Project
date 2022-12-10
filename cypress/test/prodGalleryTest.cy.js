import productGalleryPage from '../pageObjects/prodGallery.page'


describe ('Product Gallery Homepage Test Suite', ()=>{
    beforeEach(() => {
        cy.visit('/')
    })

    it ('should check the product gallery page', ()=>{
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
        //Click Quality Fitted Hat Image to view product details
        productGalleryPage.navigateToProductDetails()
        cy.get(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)`.should('have.text', 'Quality Fitted Hat'))

        //return to product page using the back to products button
        cy.get(`.chakra-heading.css-18j379d`).click()

        //Go to the Quality Fitted Hat Quantity box and increase the quantity to 2
        productGalleryPage.updateHatQty()
        cy.get(productGalleryPage.cartQtyField)
            .should('have.attr', 'aria-valuetext')
            .and('equal','2')

        //Add the Quality Fitted Hat to Cart
        productGalleryPage.hatAddToCart()
        cy.url().should('include','/products#/cart') //check that it navigate to the cart summary page
        cy.get(`.snipcart-item-line__header`).should('have.text', 'Quality Fitted Hat')

        //navigate back to product page
        cy.get(`.snipcart-modal__close-title.snipcart__font--std`).click()
 
    })
})