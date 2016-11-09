import { Component } from '@angular/core';

import { Player } from './player';
import { YatzyService } from '../yatzy.service';

@Component({
    moduleId: module.id,
    selector: 'vcy-player',
    templateUrl: 'players.component.html'
})
export class PlayerComponent {
    newPlayer: Player;
    
    constructor(private yatzyService: YatzyService) { }

    addPlayer(name) {
        this.yatzyService.addPlayer(name);
    }
}