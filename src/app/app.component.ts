import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl:'./app.component.html',
  standalone:true,
  styleUrls:['../styles.scss'],
})
export class AppComponent {
  title='student-management';
}  
