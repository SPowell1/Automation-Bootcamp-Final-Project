class ProductGallery{
    //#region Selectors

    get hatAddToCartBtn(){
        return (`.chakra-button.snipcart-add-item.css-betff9[data-item-id='quality-hat-model']`)
    }

    get hatImgBtn(){
        return (`img[src='/images/quality-hat-model.jpg']`)
    }

    get signoutBtn(){
        return (`body div button:nth-child(4)`)
    }

    get cartBtn(){
        return (`body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(4)`)
    }

    get cartQtyField(){
        return (`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)`)
    }
    //#endregion

    //#region Methods

    updateHatQty(){
        this.cartQtyField.scrollIntoView()
        this.cartQtyField.clear()
        this.cartQtyField.type('2')
    }

    hatAddToCart(){
        this.hatAddToCartBtn.should('be.visible').click()
    }

    navigateToProductDetails(){
        //this.hatImgBtn.scrollIntoView()
        this.hatImgBtn.click()
    }

    navigateToCartPage(){
        this.cartBtn.scrollIntoView()
        this.cartBtn.should('be.visible').click()
    }

    signOUt(){
        
        this.signoutBtn.scrollIntoView()
        this.signoutBtn.should('be.visible').click()
    
    }
    //#endregion



}
export default new ProductGallery()