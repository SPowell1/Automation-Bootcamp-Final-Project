import contactPage from '../pageObjects/contact.page'
cy.faker = require('faker')

describe('Contact Page Test Suite', ()=>{
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

    it('Should complete the contact form and submit it successfully', ()=>{
        //navigate to contact page
        contactPage.contactBtn.click()

        //complete the contact form
        contactPage.filloutContactForm()
        cy.get(`.chakra-alert.css-8zqf8h`).should('be.visible')

    }),

    //negative test for contact form completion
    it('should attempt to submit an incomplete contact form', ()=>{
        //navigate to contact page
        contactPage.contactBtn.click()

        //submit an incomplete contact form
        contactPage.incompleteFormCompletion()
        cy.get(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3)`).should('include.text', 'required')

    }),

    it('should navigate to the Quality Works Twitter page',()=>{
         //navigate to contact page
         contactPage.contactBtn.click()

         //verify that the twitter element contains the link to the QW Twitter profile page
         cy.get(`a[href='https://twitter.com/qualityworkscg']`).should('have.attr','href','https://twitter.com/qualityworkscg')
         
    })
})