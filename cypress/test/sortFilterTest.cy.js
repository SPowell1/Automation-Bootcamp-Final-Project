///<reference types="cypress" />
import Product from '../pageObjects/product.page'
import ProductData from '../data/products.data'

describe('Sort Test Suite', () => {
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

    it.only('should sort product list from Z-A', () => {
        Product.selectSort(ProductData.sort['Z to A'])

        // Sort data list based on name, from Z to A
        ProductData.products.sort().reverse()

        cy.get(Product.itemsName).each(($elem, index) => {
            expect($elem.text()).equal(ProductData.products[index].name)
        })
    })

    it('should sort product list from low to high', () => {
        Product.selectSort(ProductData.sort['Low to High'])

        // Sort data list based on price, from low to high
        ProductData.products.sort((a, b) => a.price - b.price)

        cy.get(Product.itemsPrice).each(($elem, index) => {
            expect($elem.text()).equal(`${ProductData.products[index].price}`)
        })
    })

    it('should sort product list from high to low', () => {
        Product.selectSort(ProductData.sort['High to Low'])

        // Sort data list based on price, from high to low
       
        cy.get(Product.itemsPrice).each(($elem, index) => {
            expect($elem.text()).equal(`${ProductData.products[index].price}`)
        })
    })
})