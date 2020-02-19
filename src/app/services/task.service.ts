import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable} from 'rxjs/Observable'

@Injectable()
export class TaskService {

  private taskList = new Array<work>();
  private taskListdone = new Array<work>(); // /\ potrzebujemy Subjecta/Obserwable do wyslania tych list do komponentow
  // tak aby komponenty mogły te listy obserwować

  private taskListObs = new BehaviorSubject<Array<Object>>(this.taskList);
  private taskListDoneObs = new BehaviorSubject<Array<Object>>(this.taskListdone);

  constructor() {
    this.taskList.push(
      new work("das"),
      new work("dasd"),
      new work("das23"),
      new work("dasas")
    );
    this.taskListObs.next(this.taskList); // od razu dodajemy do Obs inicjalizacje
   // this.taskListObsDone.next(this.taskListdone)
  }

  selectedTask(task: string) {
    this.taskList.push(new work(task));
    this.taskListObs.next(this.taskList); // musimy wyslac zmiany spowrotem do serwisu, zeby subskrybencji mogli zauwazyc zmiany
  }
  removeTask(task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.taskListObs.next(this.taskList); // musimy wyslac zmiany
  }
  removeTaskdone(task) {
    this.taskListdone = this.taskListdone.filter(e => e !== task);
    this.taskListDoneObs.next(this.taskListdone);
  }
  doneTask = task => {
    this.taskListdone.push(task);
    this.removeTask(task);
    this.taskListDoneObs.next(this.taskListdone); // emitacja nowej listy zadan
  };

  getTasksListObs(): Observable<Array<Object>>{ //metody dostepu do Subjectow

    return this.taskListObs.asObservable(); // zeby mozna bylo subskrybowac
    
  } 

  getTasksListDoneObs(): Observable<Array<Object>>{ //metody dostepu do Subjectow

    return this.taskListDoneObs.asObservable(); // zeby mozna bylo subskrybowac
    
  } 
}

class work {
  constructor(public Work: string) {}
}
