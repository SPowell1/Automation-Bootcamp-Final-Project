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

    get googleLoginBtn(){
        return (`.auth0-lock-social-button-text`)
    }

    get signinTabBtn(){
        return (`li[class='auth0-lock-tabs-current'] span`)
    }

    get googleSignUpBtn(){
        return (`.auth0-lock-social-button-text`)
    }

    get signupBtn(){
        return (`.auth0-label-submit`)
    }
    //#endregion

    //region Methods

    userLogin(email, password){
        this.emailField.type(email)
        this.passwordField.type(password)
        this.loginBtn.click()
    }

    googleLogin(){
        this.googleLoginBtn.click() 
    }

    userSignup(email, password){
        this.emailField.type(email)
        this.passwordField.type(password)
        this.signupBtn.click()
    }

    googleSignup(){
        this.googleSignUpBtn.click()
    }


    forgotPassword(){
        this.forgotPasswordBtn.click()
    }
}
export default new Authentication()