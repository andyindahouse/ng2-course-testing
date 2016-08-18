export class SearchUserPo {

  searchUserButton:protractor.ElementFinder
  usernameInput:protractor.ElementFinder
  login:protractor.ElementFinder

  constructor(){
    this.searchUserButton = element(by.id('searchUser'))
    this.usernameInput = element(by.id('username'))
    this.login = element(by.id('login'))
  }


  goToUrl(): void {
    browser.get('http://127.0.0.1:8080/')
  }

  getSearchUserButton():protractor.ElementFinder {
    return this.searchUserButton
  }

  setUsernameInput(username: string): void {
    this.usernameInput.sendKeys(username)
  }

  getLogin(): protractor.ElementFinder {
    return this.login
  }


}
