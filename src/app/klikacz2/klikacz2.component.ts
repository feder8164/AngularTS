import { Component, OnInit } from '@angular/core';
import { ClickService} from '../services/click.service'

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css'],
   providers: [ClickService]
})
export class Klikacz2Component implements OnInit {

   clik2:number = 0;

  fclick2(){
    this.clik2++;
    this.clickService.addClicks();
  }

  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

}