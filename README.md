# Automation Bootcamp- Final Project 
Project to automate testing for the https://ui-automation-camp.vercel.app/ web application

## Getting Started

Packages to install (assuming Node.js is already installed)

```bash
# npm install cypress --save-dev
# npm install cypress-iframe --save
# npm install faker
```


## Dependencies

```python
# cypress iframe
# faker
# npm run-all
# mochawesome
# mochawesome-merge
# mochawesome-report-generator
```

## Running the tests

**To run tests in the browser
```bash
npx cypress run
```
**To run a specific test with the reporter
```bash
npm run test:spec cypress/test/testName.cy.js 
```
**To run a specific test without the report
```bash
npx cypress run --spec cypress/test/testName.cy.js 
```