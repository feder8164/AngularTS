import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddComponent } from './add/add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListDoneComponent } from './task-list-done/task-list-done.component';
import { TaskService } from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddComponent, TaskListComponent,TaskListDoneComponent, CheckedDirective],
  bootstrap:    [ AppComponent ],
  providers: [TaskService]
})
export class AppModule { }
