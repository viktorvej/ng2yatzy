import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DiceComponent } from './dice/dice.component';
import { PlayerComponent } from './players/players.component';
import { SameNumberComponent } from './same-number/same-number.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent ,
    DiceComponent,
    PlayerComponent,
    SameNumberComponent,
    TableComponent
  ],
  bootstrap: [ AppComponent ] 
})
export class AppModule { }
