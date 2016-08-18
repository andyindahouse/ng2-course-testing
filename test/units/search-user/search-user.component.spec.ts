import {describe, it, expect, beforeEachProviders, inject, async} from '@angular/core/testing'
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing'
import {provide} from '@angular/core'

import {SearchUserComponent} from '../../../app/search-user/search-user.component'
import {SearchUserService} from '../../../app/search-user/search-user.service'
import {SearchUserServiceMock} from './search-user.service.mock'

describe('Search User Component', () => {

  it('show user data', async(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb
    .overrideProviders(SearchUserComponent, [
      SearchUserService, provide(SearchUserService, {useClass:SearchUserServiceMock})
    ])
    .createAsync(SearchUserComponent).then(
      (cf:ComponentFixture<SearchUserComponent>) => {
        let ne = cf.debugElement.nativeElement
        ne.querySelector('#searchUser').click()
        cf.detectChanges()
        let login = ne.querySelector('#login')
        expect(login.innerHTML).toBe('raguilera82')
      }
    )
  })))

})
