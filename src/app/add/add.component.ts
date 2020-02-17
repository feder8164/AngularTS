import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addTask: string;

  @Output()
  eventTask = new EventEmitter<string>();
  
  pushTask(task){
    this.eventTask.emit(this.addTask);
    console.log(this.addTask)
    this.addTask = '';
  
  }
  constructor() { }

  ngOnInit() {
  }

}