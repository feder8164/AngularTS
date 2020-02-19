import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable} from 'rxjs/Observable';
import { LogService } from '../services/log.service';

@Injectable() // jest po to zeby mozna bylo tutaj cos wstrzykiwac
export class ClickService {

  //<!------------Sumowanie_klikniec--------->//

  private sumClicks = 0;
  private sum = new Subject<number>(); // mozemu wrzucac do neigo jakies informacjie
  
  constructor(private log: LogService) { }

  addClicks(){
    this.sumClicks++;
    this.sum.next(this.sumClicks); // wrzucamy zmienne do subject
    this.log.logger('Click');
  }

  getSum(): Observable<number>{ // ta metoda bedzie zwaracała
    return this.sum.asObservable();
  }

  

}