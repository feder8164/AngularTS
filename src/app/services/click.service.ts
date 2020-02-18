import { Injectable } from '@angular/core';

@Injectable()
export class ClickService {

  //<!------------Sumowanie_klikniec--------->//

  sumClicks = 0;

  //metoda ktora bedzie wywoływana przez nasze komponenty 

  addClicks(){
    this.sumClicks++;
    console.log(this.sumClicks);
  }

  constructor() { }

}