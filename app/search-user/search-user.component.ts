import {Component} from '@angular/core'
import {Http} from '@angular/http'

@Component({
  selector: 'au-search-user',
  template: `<input type="text" #username>
             <button id="searchUser" (click)="searchUser(username.value)">Search</button>
             <div *ngIf="login">
              <p id="login">{{login}}</p>
              <p id="name">{{name}}</p>
              <img src="{{imageUrl}}"/>
             </div>`
})

export class SearchUserComponent {

  login: string
  name: string
  imageUrl: string

  constructor(private http:Http){}

  searchUser(username:string){
    this.http.get('https://api.github.com/users/' + username)
    .map(response => response.json())
    .subscribe(
      data => {
        this.login = data.login
        this.name = data.name
        this.imageUrl = data.avatar_url
      },
      error => console.log(error)
    )
  }

}
