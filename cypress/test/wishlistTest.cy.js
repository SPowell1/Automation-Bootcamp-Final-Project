import wishListPage from "../pageObjects/wishList.page";

describe('Wishlist Test Suite',()=>{
    beforeEach(() => {

        //before each test it should go to the base url and sign in
        cy.visit('/')

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

    /*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified here
        */

    it('should favorite 1 item from product page',()=>{
        wishListPage.favoriteSingleItem()
        cy.get(`#chakra-toast-manager-top-right`).should('contain.text','added to')
       
    }),

    it('should favorite 2 items via prod page',()=>{
        wishListPage.favoriteMultItems()
        cy.get(`#chakra-toast-manager-top-right`).should('contain.text','added to favorites')
        
    }),

    it('should remove item via product page',()=>{
        wishListPage.favoriteSingleItem()
        wishListPage.pgRemoveFavorite()
        cy.get(`#chakra-toast-manager-top-right`).should('contain.text','removed')
    }),

    it('should favorite item via product details page',()=>{
        wishListPage.pdFavoriteItem()
        cy.get(`#chakra-toast-manager-top-right`).should('include.text','added to')
        
    }),

    it('should remove item via favorite page',()=>{
        wishListPage.fpRemoveFavorite()
        cy.get(`.chakra-stack.css-owjkmg`).contains('No favorites added!')

    })
})