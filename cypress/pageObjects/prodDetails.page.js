class ProductDetails{
//#region Selectors

get prodUnitPrice(){
    return cy.get(`:nth-child(3) > :nth-child(2)`)
}

get truckerHatImgBtn(){
    return cy.get (`.chakra-image.css-2i84d9[src='/images/quality-hat.jpg']`)
}

get nextImgBtn(){
    return (`button[class= "control-arrow control-next"]`)
}

get relatedProductsTitle(){
    return cy.get(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h2:nth-child(3)`)
}

get relatedProdImg(){
    return (`img[class='chakra-image css-138bbah']`)
}

get relatedProdDesc(){
    return (`.css-egoftb > :nth-child(2)`)
}

get prevImgBtn(){
    return (`.carousel-slider > .control-prev`)
}


//#endregion
//#region Methods

moveToNextProdImg(){
    cy.wait(2000)//wait for page to completely load
    this.nextImgBtn.click()
}


/*Tests returns a type error or another error when the selector is called via the pageObject file
        Cypress only finds the element if the selector is specified in the spec file
        */
navigateToARelatedProd(){
    
    this.relatedProdImg.click()
}
//#endregion
}
export default new ProductDetails()