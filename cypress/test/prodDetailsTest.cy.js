import prodDetailsPage from "../pageObjects/prodDetails.page";

describe('Product Details Page Test Suite',()=>{
    beforeEach(() => {
        cy.viewport(1024, 950)
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
          cy.wait(3000) //wait for the page to load
          
          /*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified here
        */
          cy.get(`.chakra-image.css-2i84d9[src='/images/quality-hat.jpg']`).click()//Add quality trucker hat to cart
    })

    it('should switch to the next product image',()=>{   
        cy.wait(1500)   
        cy.url().should('include', '/products/quality-hat')
        cy.wait(2000)
        cy.get(prodDetailsPage.nextImgBtn).should('exist')
        cy.get(prodDetailsPage.nextImgBtn).click()
        cy.get(prodDetailsPage.prevImgBtn).should('exist')
    }),

    it('should check that the product unit price is displayed on the page',()=>{

        /*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified here
        */
        cy.get(`:nth-child(3) > :nth-child(2)`).should('be.visible')
    })

    it('Should select a related product and navigate to that product details page',()=>{
        cy.wait(3000)
        cy.get(prodDetailsPage.relatedProductsTitle).should('include.text','')
        cy.get(prodDetailsPage.relatedProdImg).should('be.visible')

        /*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified here
        */
        cy.get(`img[class='chakra-image css-138bbah']`).click()
        cy.get(prodDetailsPage.relatedProdDesc).should('include.text','Vintage Washed Distressed Baseball-Cap')

    })

})