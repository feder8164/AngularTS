import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  addTask: string;
  taskList = new Array<work>(); //tablica obiektow
  taskListdone = new Array<work>();
  pushTask(){
    this.taskList.push(new work(this.addTask));
  }
  removeTask(task){ // przesyłam obiekt
    this.taskList = this.taskList.filter(e => e !== task)
  }
  removeTaskdone(task){ // przesyłam obiekt
    this.taskListdone = this.taskListdone.filter(e => e !== task)
  }
  doneTask = task => {
    this.taskListdone.push(task);
    this.removeTask(task);
  }
  
}
class work{
  constructor(public Work: string ){

  }
}