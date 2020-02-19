import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';
import { ClickService } from './services/click.service';
import { LogService } from './services/log.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, Klikacz1Component, Klikacz2Component ],
  bootstrap:    [ AppComponent ],
  providers: [LogService]
})
export class AppModule { }
