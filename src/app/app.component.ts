import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl:'./app.component.html',
  standalone:true,
  styleUrls:['../styles.scss'],
})
export class App {
}  
