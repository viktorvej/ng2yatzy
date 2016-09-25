import { Component } from '@angular/core';

@Component({
    selector: 'vcy-dice',
    templateUrl: './app/dice/dice.component.html'
})
export class DiceComponent { 
    dice = [ 
        { value: 0, save: false },
        { value: 0, save: false },
        { value: 0, save: false },
        { value: 0, save: false },
        { value: 0, save: false } 
    ];
}