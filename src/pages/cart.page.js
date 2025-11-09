class CartPage {
    get pageTitle(){
        return $('.title');
    }
    get checkoutBtn(){
        return $('[data-test="checkout"]'); 
    }
    async getPageTitle(){
        return await this.pageTitle.getText();
    }
    async open(){
        await browser.url('/cart.html');
    }
    async isProductInCart(productName){
        const items = await $$('.inventory_item_name');
        for (const item of items) {
            const itemname = await item.getText();
            if (itemname === productName){
                return true
            }
            
        }
        return false; 
    }
    async proceedToCheckout(){
        await this.checkoutBtn.click();
    }
   
}
export default new CartPage;