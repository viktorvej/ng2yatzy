import { Component, OnInit } from '@angular/core';

import { Player } from '../players/player';
import { YatzyService } from '../yatzy.service';

@Component({
    moduleId: module.id,
    selector: 'vcy-table',
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit{ 
    players: Player[]
    
    constructor(private yatzyService: YatzyService) { }

    ngOnInit(): void {
        this.players = this.yatzyService.getPlayers();
    }

}