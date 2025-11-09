class LoginPage {
    get usernameField(){
        return $('#user-name');
    }
    get passwordField(){
        return $('#password');
    }
    get loginBtn(){
        return $('#login-button');
    }
    get errorMsg(){
        return $('[data-test="error"]');
    }
    async open(){
        await browser.url('/');
    }
    async login(username, password){
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginBtn.click();
    }
}

export default new LoginPage();