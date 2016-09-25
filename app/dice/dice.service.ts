import { Injectable } from '@angular/core';

import { Die } from './die';

@Injectable()
export class DiceService {
    dice: Die[] = [
        { value: 1, save: false },
        { value: 1, save: false },
        { value: 1, save: false },
        { value: 1, save: false },
        { value: 1, save: false } 
    ];

    getDice(): Die[] {
        return this.dice;
    }

    rollTheDice(): void {
        this.dice.forEach(die => die.value = this.throwDie(die));
    }

    private throwDie(die): number {
        if (die.save)
            return die.value;
        return Math.floor(Math.random() * 6 + 1);
    }
}
