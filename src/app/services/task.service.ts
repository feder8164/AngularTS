import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable} from 'rxjs/Observable'
import { Task } from '../model/task'
 
@Injectable()
export class TaskService {

  private taskList = new Array<Task>();
  private taskListdone = new Array<Task>(); // /\ potrzebujemy Subjecta/Obserwable do wyslania tych list do komponentow
  // tak aby komponenty mogły te listy obserwować

  private taskListObs = new BehaviorSubject<Array<Task>>([]); // od teraz operujemy na tasku
  private taskListDoneObs = new BehaviorSubject<Array<Task>>([]); 

  constructor() {
    this.taskList = [
      {name: 'Sprzatanie', created: new Date()},
      {name: 'Cos', created: new Date()},
      {name: 'cos2', created: new Date()},
      {name: 'hehe', created: new Date()}
    ];
    this.taskListObs.next(this.taskList)
    
  };
  

  selectedTask(task: Task) {
    this.taskList.push(task);
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

  getTasksListObs(): Observable<Array<Task>>{ //metody dostepu do Subjectow

    return this.taskListObs.asObservable(); // zeby mozna bylo subskrybowac
    
  } 

  getTasksListDoneObs(): Observable<Array<Task>>{ //metody dostepu do Subjectow

    return this.taskListDoneObs.asObservable(); // zeby mozna bylo subskrybowac
    
  } 
}