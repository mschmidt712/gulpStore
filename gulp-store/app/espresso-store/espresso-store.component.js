"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Store = (function () {
    function Store(title, image, description) {
        this.title = title;
        this.image = image;
        this.description = description;
    }
    ;
    return Store;
}());
var EspressoStoreComponent = (function () {
    function EspressoStoreComponent() {
        this.stores = [
            new Store('Espresso Machine', '/app/assets/EspressoMachine.jpeg', 'The pick me up for a good start to every morning.'),
            new Store('Juicer', '/app/assets/Juicer.jpg', 'A superfood smoothie blended up in a cup.'),
            new Store('Soda', '/app/assets/crystalPepsi.jpg', 'A little flavored bubbly can be good for the soul.'),
            new Store('Water', '/app/assets/boxedWater.jpeg', 'This all natural drink is now served in every way under the moon.')
        ];
    }
    EspressoStoreComponent = __decorate([
        core_1.Component({
            selector: 'espresso-store',
            templateUrl: '/app/espresso-store/espresso-store.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EspressoStoreComponent);
    return EspressoStoreComponent;
}());
exports.EspressoStoreComponent = EspressoStoreComponent;
//# sourceMappingURL=espresso-store.component.js.map