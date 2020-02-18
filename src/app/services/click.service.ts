import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Observable'

@Injectable()
export class ClickService {

  //<!------------Sumowanie_klikniec--------->//

  private sumClicks = 0;
  private sum = new Subject<number>(); // mozemu wrzucac do neigo jakies informacjie
  

  addClicks(){
    this.sumClicks++;

    this.sum.next(this.sumClicks) // wrzucamy zmienne do subject
  }

  getSum(): Observable<number>{ // ta metoda bedzie zwaracała
    return this.sum.asObservable();
  }

  constructor() { }

}