import faker from 'faker'

class Contact{
    //#region Selectors

    get contactBtn(){
        return cy.get(`#top-contact`)
    }

    get firstnameField(){
        return cy.get(`#firstName`)
    }

    get lastnameField(){
        return cy.get(`#lastName`)
    }

    get emailField(){
        return cy.get(`#email`)
    }

    get subjectField(){
        return cy.get(`#subject`)
    }

    get messageField(){
        return cy.get(`#message`)
    }

    get sendMsgBtn(){
        return cy.get(`button[class='chakra-button css-vs0e4t']`)
    }

    get successMsg(){
        return cy.get(`.chakra-alert.css-8zqf8h`)
    }

    get failureMsg(){
        return cy.get(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3)`)
    }

    get twitterBtn(){
        return cy.get(`//a[@href='https://twitter.com/qualityworkscg']//div//p`)
    }

    //#endregion
    //region Methods

    filloutContactForm(fname, lname,emailAddrs,subj,msg){

        //Getting faker data
        fname= faker.name.firstName()
        lname= faker.name.lastName()
        emailAddrs= faker.internet.email()
        subj= faker.lorem.sentence()
        msg= faker.lorem.paragraph()

        //Adding data to the fields
        this.firstnameField.type(fname)
        this.lastnameField.type(lname)
        this.emailField.type(emailAddrs)
        this.subjectField.type(subj)
        this.messageField.type(msg)

        this.sendMsgBtn.click()
    }

    incompleteFormCompletion(fname,lname,msg){
        //Getting faker data
        fname= faker.name.firstName()
        lname= faker.name.lastName()
        msg= faker.lorem.paragraph()

        //Adding data to the fields
        this.firstnameField.type(fname)
        this.lastnameField.type(lname)
        this.messageField.type(msg)

        this.sendMsgBtn.click()
    }



    //endregion

}
export default new Contact()