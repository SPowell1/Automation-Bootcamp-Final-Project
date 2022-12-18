import searchPage from '../pageObjects/search.page'

describe ('Search page Test suites', ()=>{
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
    })

    it('should search for a product by a partial name', ()=>{
        searchPage.searchPartialNameMatch()
        const expectedCount= 4 //expected # of products that should be on the page
        cy.get(`div[class='chakra-stack css-uaqjf']`).should('have.length', expectedCount)
    
    }),

    it('should check if case sensitivity affects search',()=>{
        //Lowercase search for hat
        searchPage.searchLowerCaseSpeltItem()
        const expectedCount= 2 //expected # of products that should be on the page
        cy.get(`div[class='chakra-stack css-uaqjf']`).should('have.length', expectedCount)
        //checking the products returned by search
        cy.get(`#product-0`).should('be.visible')
        cy.get(`#product-1`).should('be.visible')

        //clear what ws type in search box
        searchPage.searchBox.clear()

        //Uppercase search HAT
        searchPage.searchUpperCaseSpeltItem()
        cy.get(`#product-0`).should('be.visible')
        cy.get(`#product-1`).should('be.visible')

    })

    it('should search for a non-existent product',()=>{
        searchPage.searchNonexistentItem()
        const expectedCount= 0 //expected # of products that should be on the page
        cy.get(`div[class='chakra-stack css-uaqjf']`).should('have.length', expectedCount)

    })
})