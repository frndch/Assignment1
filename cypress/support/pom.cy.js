
export default class HomePage{
    static getUserName() {
        return cy.get('[id="user-name"]');
    }
    static getPassword(){
        return cy.get('[id="password"]');
    }
    static getLoginButton() {
        return cy.get('[id="login-button"]');
    }
    static getBackpacktoCartButton() {
        return cy.get('[id = add-to-cart-sauce-labs-backpack]');
    }
    static getBoltTshirttoCartButton() {
        return cy.get('[id = add-to-cart-sauce-labs-bolt-t-shirt]');
    }
    static getCartButton() {
        return cy.get('.shopping_cart_link');
    }
    static getCheckoutButton() {
        return cy.get('[id = checkout]');
    }
    static getFirstName() {
        return cy.get('[id = first-name]');
    }
    static getLastName() {
        return cy.get('[id = last-name]');
    }
    static getPostalCode() {
        return cy.get('[id = postal-code]');
    }
    static getContinueButton() {
        return cy.get('[id = continue]');
    }
    static getFinishButton() {
        return cy.get('[id = finish]');
    }
    static getCheckoutCompletedPicture() {
        return cy.get('[class = pony_express]')
    }
    static getNavigationMenu(){
        return cy.get('[id = react-burger-menu-btn]')
    }
    static getLogoutButton(){
        return cy.get('[id = logout_sidebar_link]')
    }
    static getDataTestError(){
        return cy.get('[data-test = error]')
    }
    }
    