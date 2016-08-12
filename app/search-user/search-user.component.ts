import {Component} from '@angular/core'
import {User} from '../shared/model/user'
import {GithubUserProxy} from '../shared/proxies/github-user.proxy'

@Component({
  selector: 'au-search-user',
  template: `<input type="text" #username>
             <button id="searchUser" (click)="searchUser(username.value)">Search</button>
             <div *ngIf="user">
              <p id="login">{{user.login}}</p>
              <p id="name">{{user.name}}</p>
              <img src="{{user.imageUrl}}"/>
             </div>`
})

export class SearchUserComponent {

  user: User

  constructor(private proxy:GithubUserProxy){}

  searchUser(username:string){
    this.proxy.searchUserByUsername(username)
    .map(response => response.json())
    .subscribe(
      data => {
        this.user = {"login":data.login, "name":data.name, "imageUrl":data.avatar_url}
      },
      error => console.log(error)
    )
  }

}
