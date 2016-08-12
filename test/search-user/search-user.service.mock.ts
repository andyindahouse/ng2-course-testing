import {Observable} from 'rxjs/Observable'
import {User} from '../../app/shared/model/user'

export class SearchUserServiceMock {

  searchUser(username:string):Observable<User> {
    return Observable.of({login:'raguilera82', name:'Ruben Aguilera Diaz-Heredero', imageUrl:'http://image'})
  }

}
