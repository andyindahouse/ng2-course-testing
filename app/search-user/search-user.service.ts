import {Observable} from 'rxjs/Observable'
import {Injectable} from '@angular/core'
import {User} from '../shared/model/user'
import {GithubUserProxy} from '../shared/proxies/github-user.proxy'

@Injectable()
export class SearchUserService {

  constructor(private proxy:GithubUserProxy){}

  searchUser(username:string):Observable<User> {
    return this.proxy.searchUserByUsername(username)
    .map(response => response.json())
    .map(
      data => {
      return {"login":data.login, "name":data.name, "imageUrl":data.avatar_url}
    })
  }

}
