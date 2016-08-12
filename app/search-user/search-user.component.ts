import {Component} from '@angular/core'
import {Http} from '@angular/http'
import {User} from '../shared/model/user'

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

  constructor(private http:Http){}

  searchUser(username:string){
    this.http.get('https://api.github.com/users/' + username)
    .map(response => response.json())
    .subscribe(
      data => {
        this.user = {"login":data.login, "name":data.name, "imageUrl":data.avatar_url}
      },
      error => console.log(error)
    )
  }

}
