import { Component } from '@angular/core';

import { DiceComponent } from './dice/dice.component';
import { DiceService } from './dice/dice.service';
import { YatzyService } from './yatzy.service';

@Component({
  selector: 'vcy-app',
  templateUrl: './app/app.component.html',
  providers: [ YatzyService, DiceService ]
})
export class AppComponent { }
