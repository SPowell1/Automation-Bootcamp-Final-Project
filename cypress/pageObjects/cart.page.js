class Cart{
    //#region Selectors

    //Cart Page Selectors
    get cartBtn(){
        return cy.get(`button[class='chakra-button snipcart-checkout css-186fne3']`)
    }

    get removeFromCartBtn(){
        return cy.get ('.snipcart-button-icon.is-danger')
    }

    get decrementProdQtyBtn(){
        return cy.get (`button[title='Decrement quantity']`)
    }

    get incrementProdQtyBtn(){
        return cy.get (`button[title='Increment quantity']`)
    }

    get checkoutBtn(){
        return cy.get ('.snipcart-base-button__label')
    }

    get emptyCartMsg(){
        return cy.get (`.snipcart-empty-cart__title.snipcart__font--secondary.snipcart__font--xlarge.snipcart__font--bold`)
    }

    get continueShoppingBtn(){
        return cy.get('.snipcart-modal__close-title')
    }

    get cartHeader(){
        return (`.snipcart-cart-header__title`)
    }

    get cartItemTitle(){
        return cy.get('.snipcart-item-line__title')
    }

    get mugCartProdQty(){
        return cy.get('.snipcart-item-quantity__quantity > .snipcart__font--secondary')
    }
    
    get mugTotal(){
        return cy.get('.snipcart-summary-fees__amount')
    }

    get cartMugDesc(){
        return cy.get(`.snipcart-item-line__info > .snipcart__font--std`)
    }
    //Product page Selectors
    get homepageTitle(){
        return cy.get('a > .chakra-heading')
    }

    get mugAddToCartBtn(){
        return cy.get('#product-3 > #add-to-cart')
    }

    get mugImg(){
        return cy.get(`.chakra-image.css-2i84d9[src='/images/quality-mug.jpg']`)
    }

    get mugIncreaseQtyBtn(){
        return cy.get('#product-3-increase')
    }

    //#endregion 
    //#region Methods
    addSingleMugToCart(){
        this.mugImg.scrollIntoView()
        cy.wait(3000)
        this.mugAddToCartBtn.click()
    }

    addMultipleMugsToCart(){
        //Increase mug qty to 3 from prod page
        this.mugImg.scrollIntoView()
        cy.wait(2000)
        Cypress._.times(3, () => cy.get('#product-3-increase').click())
        this.mugAddToCartBtn.click()
    }

    removeFromCart(){
        this.removeFromCartBtn.click()
    }

    increaseProdQty3(){
        //increase prod qty to 3
       Cypress._.times(4, () => cy.get(`button[title='Increment quantity']`).click())
    }

    decrementItemQty(){
        this.decrementProdQtyBtn.click().click() 
    }

    goToCheckout(){
        this.checkoutBtn.click()
    }

    goBackToStore(){
        this.backToStoreBtn.click()
    }
    //#endregion
}
export default new Cart()