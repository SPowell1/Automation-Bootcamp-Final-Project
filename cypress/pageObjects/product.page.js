class Product{
    
    //#region Selectors
    get itemsName() {
         return ('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > p:nth-child(1)') 
    }
    get itemsPrice() { 
        return ('body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > p:nth-child(1)') 
    }

    get selectSortDropDown() { 
        return ('#sort') 
    }
    //#endregion

    //#region Methods
    selectSort(sort){
        cy.get(this.selectSortDropDown).select(sort)
    }
    //#endregion
}
export default new Product()