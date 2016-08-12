import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Injectable} from '@angular/core'

@Injectable()
export class GithubUserProxy {

  constructor(private http:Http){}

  searchUserByUsername(username: string): Observable<Response> {
    return this.http.get('https://api.github.com/users/' + username)
  }

}
