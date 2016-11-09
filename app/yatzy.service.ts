import { Injectable } from '@angular/core';

import { Die } from './dice/die';
import { Player } from './players/player';
@Injectable()
export class YatzyService {
     players: Player[] = [
         { name: "Viktor" }
     ];

     dice: Die[] = [
        { value: 1, save: false },
        { value: 1, save: false },
        { value: 1, save: false },
        { value: 1, save: false },
        { value: 1, save: false } 
    ];

    addPlayer(name) {
        this.players.push({name: name});
    }

    getPlayers() {
        return this.players;
    }

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