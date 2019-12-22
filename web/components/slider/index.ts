import { Component } from '@angular/core';

@Component({
    selector: 'slider',
    templateUrl: './slider.html'
}) export class SliderComponent {
    private styles = require('./slider.scss');

    private items: Array<object> = [
        {
            backgroundColor: 'rgb(102, 149, 190)'
        },
        {
            backgroundColor: 'rgb(250, 65, 65)'
        },
        {
            backgroundColor: 'rgb(124, 46, 46)'
        },
        {
            backgroundColor: 'rgb(146, 209, 199)'
        }
    ];
    private transform: string = '0%';
    private transition: string = '0.3s';

    private clickRightArrow(): void {
        this.transform = '-100%';
        setTimeout(()=> {
            this.items.push(this.items.shift());
            this.transform = '0%';
        }, 300);
    }

    private clickLeftArrow(): void {
        this.items.unshift(this.items.pop());
        this.transform = '-100%';
        this.transition = '0s';
        setTimeout(()=> {
            this.transition = '0.3s';
            this.transform = '0%';
        }, 0);
    }
}
