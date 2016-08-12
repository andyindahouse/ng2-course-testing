import {Component} from '@angular/core'
import {SearchUserComponent} from './search-user/search-user.component'

@Component({
  selector: 'ng2-app',
  template: `<au-search-user></au-search-user>`,
  directives: [SearchUserComponent]
})

export class AppComponent{

  constructor(){
  }

}
