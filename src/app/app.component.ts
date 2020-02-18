import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  
  
  taskList = new Array<work>();
  taskListdone = new Array<work>();

  ngOnInit(): void{
    this.taskListdone.push(new work('Sprzatanie'), new work('Mycie'), new work('Czyszczenie'), new work('Blat'))
  }
  
  selectedTask(task: string){
    this.taskList.push(new work(task));
  }
  removeTask(task){ 
    this.taskList = this.taskList.filter(e => e !== task)
  }
  removeTaskdone(task){
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