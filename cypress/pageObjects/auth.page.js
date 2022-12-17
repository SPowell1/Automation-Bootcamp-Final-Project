class Authentication{

    //#region Selectors

    get loginTabBtn(){
        return (`a[href='#']`)
    }

    get emailField(){
        return (`//input[@id='1-email']`)
    }

    get passwordField(){
        return (`//input[@id='1-password']`)
    }

    get loginBtn(){
        return (`.auth0-label-submit`)
    }

    get forgotPasswordBtn(){
        return (`.auth0-lock-alternative-link`)
    }

    get signinTabBtn(){
        return (`li[class='auth0-lock-tabs-current'] span`)
    }

    get signupBtn(){
        return (`.auth0-label-submit`)
    }

    get pageTitle(){
        return cy.get(`div[title='Reset your password']`)
    }
    //#endregion

    //region Methods

    userLogin(email, password){
        this.emailField.type(email)
        this.passwordField.type(password)
        this.loginBtn.click()
    }

    userSignup(email, password){
        this.emailField.type(email)
        this.passwordField.type(password)
        this.signupBtn.click()
    }

    forgotPassword(){
        this.forgotPasswordBtn.click()
    }
}
export default new Authentication()