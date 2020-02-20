import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HTTPComponent } from './http/http.component';
import { DescriptionPipe } from './pipes/description.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HTTPComponent, DescriptionPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
