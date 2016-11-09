import { Component, OnInit } from '@angular/core';

import { Die } from './die';
import { YatzyService } from '../yatzy.service';

@Component({
    moduleId: module.id,
    selector: 'vcy-dice',
    templateUrl: 'dice.component.html'
})
export class DiceComponent implements OnInit{ 
    dice: Die[];

    constructor(private yatzyService: YatzyService) { }

    ngOnInit(): void {
        this.dice = this.yatzyService.getDice();
    }

    rollTheDice() {
        this.yatzyService.rollTheDice();
    }

    toggleSaveDie(die) {
        die.save = !die.save;
    }
}