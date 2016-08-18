import {describe, it, expect, beforeEachProviders, inject, async} from '@angular/core/testing'
import {provide} from '@angular/core'
import {SearchUserService} from '../../../app/search-user/search-user.service'
import {GithubUserProxy} from '../../../app/shared/proxies/github-user.proxy'
import {GithubUserProxyMock} from '../shared/proxies/github-user.proxy.mock'

describe('Search user service', () => {

  beforeEachProviders(() => [
    SearchUserService,
    provide(GithubUserProxy, {useClass:GithubUserProxyMock})
  ])

  it ('should search user', async(inject([SearchUserService], (service:SearchUserService) => {
    const USERNAME:string = 'raguilera82'
    service.searchUser(USERNAME).subscribe(
      data => {
        expect(data.login).toEqual(USERNAME)
      }
    )
  })))


})
