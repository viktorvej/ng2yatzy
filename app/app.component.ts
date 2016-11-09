import { Component } from '@angular/core';

import { YatzyService } from './yatzy.service';

@Component({
  selector: 'vcy-app',
  templateUrl: './app/app.component.html',
  providers: [ YatzyService ]
})
export class AppComponent { }
