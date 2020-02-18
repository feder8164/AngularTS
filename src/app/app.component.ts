import { Component, OnInit } from '@angular/core';
import { ClickService} from './services/click.service'
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ClickService]
})
export class AppComponent implements OnInit  {
  
  allClicks: number = 0;

  constructor(private clickService: ClickService){

  }
  
  ngOnInit(): void{ // informacja ze ta zmienna sie zmieniła i pobierac informacje z serwisu
    this.clickService.getSum().subscribe(clicks => { // informacje sa na biezaco aktualizowane
      this.allClicks = clicks;
    }) 
  }
}
