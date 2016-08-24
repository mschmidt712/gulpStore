import { Component } from '@angular/core';
import { NavComponent} from './nav/nav.component';
import { EspressoStoreComponent } from './espresso-store/espresso-store.component';

@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html',
  directives: [NavComponent, EspressoStoreComponent]
})
export class AppComponent { }