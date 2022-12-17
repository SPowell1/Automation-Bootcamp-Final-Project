class Search{
    //#region Selectors

    get searchBox(){
        return cy.get (`#search`)
    }

    //#endregion
    //#region Methods

    searchPartialNameMatch(){
        this.searchBox.type('shi')//searching for all items with shi in its name
    }

    searchUpperCaseSpeltItem(){
        this.searchBox.type('HAT')
    }

    searchLowerCaseSpeltItem(){
        this.searchBox.type('hat')
    }

    searchNonexistentItem(){
        this.searchBox.type('Gloves')
    }
    //#endregion
}
export default new Search()