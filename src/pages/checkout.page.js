class CheckoutPage {
    get firstNameField(){
        return $('[data-test="firstName"]');
    }
    get lastNameField(){
        return $('[data-test="lastName"]');
    }
    get postalCodeField(){
        return $('[data-test="postalCode"]');
    }
    get continueBtn(){
        return $('[data-test="continue"]');
    }
    get productName(){
        return $('[data-test="inventory-item-name"]');
    }
    get productPrice(){
        return $('[data-test="subtotal-label"]');
    }
    get finishBtn(){
        return $('[data-test="finish"]');
    }
    get confirmationMessage(){
        return $('[data-test="complete-header"]');
    }
    async fillCheckoutInformation(firstName, lastName, postalCode){
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.postalCodeField.setValue(postalCode);
    }
    async clickContinue(){
        await this.continueBtn.click();
    }
    async getProductName(){
        return await this.productName.getText(); 
    }
    async getTotal(){
        return await this.productPrice.getText();
    }
    async clickFinish(){
        await this.finishBtn.click();
    }
    async getConfirmationMessage(){
        return await this.confirmationMessage.getText();
    }
}
export default new CheckoutPage;