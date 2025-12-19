import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';

import { Dashboard } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,Dashboard],
  templateUrl:'./app.component.html',
  standalone:true,
  styleUrls:['../styles.scss'],
})
export class App {
}  