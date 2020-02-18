import { Component } from '@angular/core';
import { ClickService} from './services/click.service'
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ClickService]
})
export class AppComponent  {
  name = 'Angular';
}
