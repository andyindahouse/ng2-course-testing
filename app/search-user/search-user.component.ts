import {Component} from '@angular/core'
import {User} from '../shared/model/user'
import {SearchUserService} from './search-user.service'

@Component({
  selector: 'au-search-user',
  template: `<input id="username" type="text" #username>
             <button id="searchUser" (click)="searchUser(username.value)">Search</button>
             <div *ngIf="user">
              <p id="login">{{user.login}}</p>
              <p id="name">{{user.name}}</p>
              <img src="{{user.imageUrl}}"/>
             </div>`,
    providers: [SearchUserService]
})

export class SearchUserComponent {

  user: User

  constructor(private service:SearchUserService){}

  searchUser(username:string){
    this.service.searchUser(username)
    .subscribe(
      data => {
        this.user = data
      },
      error => console.log(error)
    )
  }

}
