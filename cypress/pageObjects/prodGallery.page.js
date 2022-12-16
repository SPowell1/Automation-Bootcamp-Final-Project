class ProductGallery{
    //#region Selectors

    get hatAddToCartBtn(){
        return cy.get(`.chakra-button.snipcart-add-item.css-betff9[data-item-id='quality-hat-model']`)
    }

    get hatImgBtn(){
        return cy.get(`img[src='/images/quality-hat-model.jpg']`)
    }

    get signoutBtn(){
        return cy.get(`#top-sign-out`)
    }

    get cartBtn(){
        return (`button[class='chakra-button snipcart-checkout css-186fne3']`)
    }

    get cartQtyField(){
        return cy.get(`div[id='product-0'] div div div input[role='spinbutton']`)
    }

    get cartQtyIncreaseBtn(){
        return cy.get(`#product-0-increase`)
    }
    //#endregion

    //#region Methods

    updateHatQty(){
        this.cartQtyField.scrollIntoView()
        this.cartQtyIncreaseBtn.click()
    }

    hatAddToCart(){
        this.hatAddToCartBtn.should('be.visible').click()
    }

    navigateToProductDetails(){
        this.hatImgBtn.scrollIntoView()
        this.hatImgBtn.click()
    }

    navigateToCartPage(){
        //this.cartBtn.scrollIntoView()
        this.cartBtn.click()
    }

    signOut(){
        
        //this.signoutBtn.scrollIntoView()
        this.signoutBtn.click()
    
    }
    //#endregion



}
export default new ProductGallery()