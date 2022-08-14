import pom from 'D:/cypressjavascript/cypress/support/pom.cy.js'

const userName = "standard_user"
const password = "secret_sauce"
const firstName = "Fernando"
const lastName = "Christian"
const postalCode = "17123"
const fakePassword = "incorrect"

describe('assignment 1', () => {
  it('Checkout Single Product', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getBackpacktoCartButton().click()
    pom.getCartButton().click()
    pom.getCheckoutButton().click()
    pom.getFirstName().type(firstName)
    pom.getLastName().type(lastName)
    pom.getPostalCode().type(postalCode)
    pom.getContinueButton().click()
    pom.getFinishButton().click()
    pom.getCheckoutCompletedPicture().should('be.visible')
    cy.url().should('contain', 'https://www.saucedemo.com/checkout-complete.html')
  })

  it('Checkout Multiple Product', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getBackpacktoCartButton().click()
    pom.getBoltTshirttoCartButton().click()
    pom.getCartButton().click()
    pom.getCheckoutButton().click()
    pom.getFirstName().type(firstName)
    pom.getLastName().type(lastName)
    pom.getPostalCode().type(postalCode)
    pom.getContinueButton().click()
    pom.getFinishButton().click()
    pom.getCheckoutCompletedPicture().should('be.visible')
    cy.url().should('contain', 'https://www.saucedemo.com/checkout-complete.html')
  })

  it('Checkout without adding any product(s)', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getCartButton().click()
    pom.getCheckoutButton().click()
    pom.getFirstName().type(firstName)
    pom.getLastName().type(lastName)
    pom.getPostalCode().type(postalCode)
    pom.getContinueButton().click()
    pom.getFinishButton().click()
    pom.getCheckoutCompletedPicture().should('be.visible')
    cy.url().should('contain', 'https://www.saucedemo.com/checkout-complete.html')
  })

  it('Logout Website', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getNavigationMenu().click()
    pom.getLogoutButton().should('be.visible').click()
    pom.getLoginButton().should('be.visible')
    cy.url().should('contain', 'https://www.saucedemo.com/')
  })

  it('Login with incorrect password should return error message', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(fakePassword)
    pom.getLoginButton().click()
    pom.getDataTestError().should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Leaving First Name blank in the Checkout: Your Information page should return error message', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getBackpacktoCartButton().click()
    pom.getCartButton().click()
    pom.getCheckoutButton().click()
    pom.getLastName().type(lastName)
    pom.getPostalCode().type(postalCode)
    pom.getContinueButton().click()
    pom.getDataTestError().should('contain', 'Error: First Name is required')
  })

  it('Leaving Last Name blank in the Checkout: Your Information page should return error message', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getBackpacktoCartButton().click()
    pom.getCartButton().click()
    pom.getCheckoutButton().click()
    pom.getFirstName().type(firstName)
    pom.getPostalCode().type(postalCode)
    pom.getContinueButton().click()
    pom.getDataTestError().should('contain', 'Error: Last Name is required')
  })

  it('Leaving Postal Code blank in the Checkout: Your Information page should return error message', () => {
    cy.visit('https://www.saucedemo.com');
    pom.getUserName().type(userName)
    pom.getPassword().type(password)
    pom.getLoginButton().click()
    pom.getBackpacktoCartButton().click()
    pom.getCartButton().click()
    pom.getCheckoutButton().click()
    pom.getFirstName().type(firstName)
    pom.getLastName().type(lastName)
    pom.getContinueButton().click()
    pom.getDataTestError().should('contain', 'Error: Postal Code is required')
  })
  
})