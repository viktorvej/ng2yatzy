import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DiceComponent } from './dice/dice.component';

@NgModule({
  imports:      [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent ,
    DiceComponent
  ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { }
