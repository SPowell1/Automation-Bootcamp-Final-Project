describe ('login/signup suite', ()=>{
    beforeEach(() => {
        cy.visit('/')
    })

    it('should signup with valid',()=>{

        cy.get("#signInOrRegister").click();
        
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                
                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)`).should('be.visible').click()
                cy.get(`input[placeholder='yours@example.com']`).type("ghi@gmail.com");
                cy.get(`input[placeholder='your password']`).type("Pass12rd", { log: false });
                cy.get(".auth0-label-submit").click();
            }
        )
       
        cy.get(`.chakra-heading.css-kmq9po`).should('contain.text', 'Automation Camp Store')
        cy.url().should('include','/products')
    }),

     it('should login with valid',()=>{

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
       
        cy.get(`.chakra-heading.css-kmq9po`).should('contain.text', 'Automation Camp Store')
        cy.url().should('include','/products')
        
    }),

    //Negative Login test
    it('should attempt to login with a non-existent user',()=>{

        cy.get("#signInOrRegister").click();
        
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                cy.get(`input[placeholder='yours@example.com']`).type("pqr@gmail.com");
                cy.get(`input[placeholder='your password']`).type("Pass123r", { log: false });
                cy.get(".auth0-label-submit").click();

                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`).should('contain.text', 'Wrong')
            }
        )
       
                
    }),

    //Negative test for signup
    it('attempt to signup with existing account',()=>{

        cy.get("#signInOrRegister").click();
     
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                
                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)`).should('be.visible').click()
                cy.get(`input[placeholder='yours@example.com']`).type("xyz@gmail.com");
                cy.get(`input[placeholder='your password']`).type("Pass12rd", { log: false });
                cy.get(".auth0-label-submit").click();

                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`).should('be.visible')
                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`).should('contain.text', `We're sorry`)
           }
        )
   }),


   //Forgot Password
    it('should check the forgot password flow',()=>{

        cy.get("#signInOrRegister").click();
        
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({}) => {
                //Click forgot password button
                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(4) > a:nth-child(1)`).click()
                
                //Title of page should include text Reset your password
                cy.get(`div[title='Reset your password']`).should('have.text', 'Reset your password')

                //Add email and click send email
                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)`).type('xyz@gmail.com')
                cy.get(`.auth0-label-submit`).click()

                //check for confirmation message
                cy.get(`body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`).should('contain.text', `We've just sent`)
            }
        )      
    })

})