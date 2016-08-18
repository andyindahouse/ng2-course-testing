import {SearchUserPo} from './search-user.po'

describe('e2e: main page',  () => {

  let page:SearchUserPo
  beforeEach(() => {
    page = new SearchUserPo()
  })

  it ('should check login user', () => {

    const USERNAME:string = 'raguilera82'

    page.goToUrl()

    page.getSearchUserButton().isPresent

    page.setUsernameInput(USERNAME)
    page.searchUserButton.click()

    expect(page.getLogin().getText()).toEqual(USERNAME)

  })

})
