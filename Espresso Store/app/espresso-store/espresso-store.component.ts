import { Component } from '@angular/core';

class Store {
    constructor(
        public title: string,
        public image: string,
        public description: string
    ) {};
}

@Component({
  selector: 'espresso-store',
  templateUrl: '/app/espresso-store/espresso-store.component.html'
})
export class EspressoStoreComponent {
    public stores = [
        new Store('Espresso Machine', '/app/assets/EspressoMachine.jpeg', 'The pick me up for a good start to every morning.'),
        new Store('Juicer', '/app/assets/Juicer.jpg', 'A superfood smoothie blended up in a cup.'),
        new Store('Soda', '/app/assets/crystalPepsi.jpg', 'A little flavored bubbly can be good for the soul.'),
        new Store('Water', '/app/assets/boxedWater.jpeg', 'This all natural drink is now served in every way under the moon.')
    ];
 }