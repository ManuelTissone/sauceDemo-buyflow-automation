class ProductsPage {
    get pageTitle(){
        return $('.title');
    }
    
    async getPageTitle(){
        return await this.pageTitle.getText();
    }
    async open(){
        await browser.url('/inventory.html');
    }
    async addToCart(productName){
        const transformedName = productName.toLowerCase().replace(/ /g, '-');
        const selector = '[data-test="add-to-cart-' + transformedName + '"]';
        await $(selector).click();
    }
}

export default new ProductsPage();