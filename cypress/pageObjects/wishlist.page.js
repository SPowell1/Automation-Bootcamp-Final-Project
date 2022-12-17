class WishList{
    //#region Selectors

    get favoriteBtn(){
        return cy.get(`button[id='top-favorite']`)
    }

    get TshirtFavoriteBtn(){//from Prod pge
        return cy.get(`div[id='product-7'] div[class='css-1m8iww1']`)
    }

    get PinkPantsFavoriteBtn(){//from product Page
        return cy.get(`div[id='product-10'] div[class='css-1m8iww1']`)
    }

    get FavoriteMsgPopUp(){//from prod gallery page
        return cy.get(`#chakra-toast-manager-top-right`)
    }

    get FavoriteMsg(){//from prod page
        return cy.get(`.chakra-alert__title.css-tidvy5`)
    }

    get mugImgBtn(){//from prodGallery page
        return cy.get(`img[src='/images/quality-mug.jpg']`)
    }

    get prodDetailsItemTitle(){//from prodDetails page
        return cy.get(`div[class='chakra-stack css-84zodg'] h2[class='chakra-heading css-1dklj6k']`)
    }

    get mugFavoriteBtn(){//from prodDetails Page
        return cy.get(`.css-1m8iww1`)
    }

    get favoritePageTitle(){//from favorites page
        return cy.get(`.chakra-heading.css-11cq7yk`)
    }

    get QualityTshirtProgImg(){//get item image from favorite page
        return cy.get(`.chakra-image.css-2i84d9`)
    }

    get removeBtn(){//remove btn on favorite page
        return cy.get(`#remove-favorite-btn`)
    }

    get fpItemContainer(){
        return cy.get ('.chakra-stack.css-owjkmg')
    }
    //#endregion
    //#region Methods

    favoriteSingleItem(){//favorite single item via product page
        this.PinkPantsFavoriteBtn.scrollIntoView()
        cy.wait(2000)
        this.PinkPantsFavoriteBtn.click()
    }

    favoriteMultItems(){//favorite 2 items via prod page
       this.PinkPantsFavoriteBtn.click()
        this.TshirtFavoriteBtn.click()
    }

    pgRemoveFavorite(){ //remove pink pants via prod page
        //cy.get(this.PinkPantsFavoriteBtn).should('have.attr','color', '#F1C40F')
        this.PinkPantsFavoriteBtn.click()

    }

    pdFavoriteItem(){//favorite item via product details page
        cy.get(`img[src='/images/quality-mug.jpg']`).click()
        //cy.get(this.prodDetailsItemTitle).should('have.text', 'Mug')
        cy.wait(2000)
        cy.get('#add-to-favorite').click()

    }

    fpRemoveFavorite(){//remove item via favorite page
        cy.get(`div[id='product-7'] div[class='css-1m8iww1']`).click()
        cy.get(`button[id='top-favorite']`).click()
        cy.get(`#remove-favorite-btn`).click()
    }
}
export default new WishList()