class Cart{
    //#region Selectors
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
        return cy.get(`.snipcart-modal__close-title.snipcart__font--std`)
    }

    get cartHeader(){
        return (`.snipcart-cart-header__title.snipcart__font--black.snipcart__font--secondary`)
    }

    //#endregion 
    //#region Methods

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