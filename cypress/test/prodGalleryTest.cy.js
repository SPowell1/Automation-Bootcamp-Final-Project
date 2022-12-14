import productGalleryPage from '../pageObjects/prodGallery.page'


describe ('Product Gallery Homepage Test Suite', ()=>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('should navigate to the product gallery page via the product image', ()=>{
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
        //Click Quality Fitted Hat Image to view product details
        productGalleryPage.navigateToProductDetails()
        cy.get(`div[class='chakra-stack css-84zodg'] h2[class='chakra-heading css-1dklj6k']`).should('have.text', 'Quality Fitted Hat ')

        
        //return to product page using the back to products button
        cy.get(`.chakra-heading.css-18j379d`).click()
        // cy.contains('Automation Camp Store')

    })

    it('should increase product quantity and add it to cart',()=>{
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

         //Go to the Quality Fitted Hat Quantity box and increase the quantity to 2
         productGalleryPage.updateHatQty()
         cy.get(`div[id='product-0'] div div div input[role='spinbutton']`).should('have.attr', 'value','2')//check that the cart qty for the hat is 2
         
         cy.wait(3000) //wait for page to be properly loaded
         productGalleryPage.hatAddToCart()
         cy.get(`.snipcart-item-line__container`).contains('Washed Distressed Baseball-Cap') //check that the product added is in the cart      
    })

    it('should log out from product gallery page',()=>{
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

         //Customer should interact with hat product then decide to sign out.
         //1. Go to the Quality Fitted Hat Quantity box and increase the quantity to 2
         productGalleryPage.updateHatQty()
         cy.get(`div[id='product-0'] div div div input[role='spinbutton']`).should('have.attr', 'value','2')//check that the cart qty for the hat is 2
        
         //2. Customer should then sign out
         productGalleryPage.signOut()

        cy.url().should('eq','https://ui-automation-camp.vercel.app/') //check that url is the base URL
        cy.get("#signInOrRegister").should('exist')//check that the option to sign/register is present
              
    })
})