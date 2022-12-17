import faker from 'faker'
import 'cypress-iframe'


class Checkout{
    //#region Selectors

    get billingForm(){
        return (`div[class='snipcart__box']`)
    }

    get fullnameField(){
        return cy.get(`input[autocomplete='name']`)
    }

    get emailField(){
        return cy.get(`input[name='email']`)
    }

    get streetaddrsField(){
        return cy.get('.snipcart-form__address-autocomplete > :nth-child(2)')
    }

    get aptsuiteField(){
        return cy.get(`input[name='address2']`)
    }

    get cityField(){
        return cy.get(`input[name='city']`)
    }

    get zipcodeField(){
        return cy.get(`input[name='postalCode']`)
    }

    get paymentBtn(){
        return cy.get('.snipcart-button-primary')
    }

    get requireFieldMsg(){
        return cy.get('.snipcart-field-error')
    }

    get placeOrderBtn(){
        return cy.get(`button[type='submit']`)
    }

    get ccNumField(){
        return cy.get(`#card-number`)
    }

    get cvvField(){
        return cy.get(`#cvv`)
    }

    get expiryDateField(){
        return cy.get(`#expiry-date`)
    }

    get billingSummaryName(){
        return cy.get(':nth-child(1) > :nth-child(2) > .snipcart-billing-completed__information')
    }

    get invoiceTitle(){
        return cy.get(':nth-child(2) > .snipcart__font--subtitle')
    }

    get invoiceTotal(){
        return cy.get('.snipcart-summary-fees__total > .snipcart-summary-fees__amount')
    }
    //#endregion
    //region Methods

    completeBillingForm(fullName, emailAddrs, streetAdrs, aptSuite, cityAddrs, zipCodeNum){
        //Get faker data
        fullName = faker.name.findName()
        emailAddrs= faker.internet.email()
        streetAdrs= faker.address.streetAddress()
        aptSuite= faker.address.secondaryAddress()
        cityAddrs= faker.address.city()
        zipCodeNum= faker.address.zipCode()

        //fill in form data
        this.fullnameField.type(fullName)
        this.emailField.type(emailAddrs)
        this.streetaddrsField.type(streetAdrs)
        this.aptsuiteField.type(aptSuite)
        this.cityField.type(cityAddrs)
        cy.get('.snipcart-typeahead input').eq(0).type('Canada{enter}',{force: true} )
        cy.get('.snipcart-typeahead input').eq(1).type('Toronto',{force: true})
        this.zipcodeField.type(zipCodeNum)

        this.paymentBtn.click()

        cy.get(':nth-child(1) > :nth-child(2) > .snipcart-billing-completed__information').contains(fullName)
        cy.get(':nth-child(1) > :nth-child(2) > .snipcart-billing-completed__information').contains(emailAddrs)

    }

    incompleteBillingForm(fullName, emailAddrs, streetAdrs, aptSuite, cityAddrs, zipCodeNum){
        //Get faker data
        fullName = faker.name.findName()
        emailAddrs= faker.internet.email()
        streetAdrs= faker.address.streetAddress()
        aptSuite= faker.address.secondaryAddress()
        cityAddrs= faker.address.city()
        zipCodeNum= faker.address.zipCode()

        //fill in form data
        this.fullnameField.type(fullName)
        this.emailField.type(emailAddrs)
        this.streetaddrsField.type(streetAdrs)
        this.aptsuiteField.type(aptSuite)
        this.cityField.type(cityAddrs)
        cy.get('.snipcart-typeahead input').eq(1).type('Toronto',{force: true})
        this.zipcodeField.type(zipCodeNum)

        this.paymentBtn.click()
    }

    completePaymentInfo(){

        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('1230')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type('123')

        this.placeOrderBtn.click()

    }

    
    //#endregion

}
export default new Checkout()