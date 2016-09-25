import { Component, OnInit } from '@angular/core';

import { Die } from './die';
import { DiceService } from './dice.service';

@Component({
    selector: 'vcy-dice',
    templateUrl: './app/dice/dice.component.html'
})
export class DiceComponent implements OnInit{ 
    dice: Die[];

    constructor(private diceService: DiceService) { }

    ngOnInit(): void {
        this.dice = this.diceService.getDice();
    }

    rollTheDice() {
        this.diceService.rollTheDice();
    }

    toggleSaveDie(die) {
        die.save = !die.save;
    }
}