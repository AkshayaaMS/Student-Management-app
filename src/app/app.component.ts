import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone:true,
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <router-outlet />
  `,
  styleUrls:['../styles.scss'],
})
export class App {
  protected readonly title = signal('student-management');
}
