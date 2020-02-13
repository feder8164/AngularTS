import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  inputText = 'Tekst';
  maxLengt = 5;
  colorClass = 'color';
  logoUrl = '';

  isDisable = true;

  

  constructor(){
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
    this.change()
    }

    change(){
      this.isHidden = true;
      this.inputText = "Zmiana tekstu i koloru";
      this.maxLengt = 10;
      this.colorClass = 'color2';
      this.logoUrl = 'https://hiro.pl/wp-content/uploads/2017/12/xd.jpg'
    }

    change1(){
   this.colorClass = 'color';

  }
  isHidden = true;

  hidden(){
    this.isHidden = false;
  }
}
