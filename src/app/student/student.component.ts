import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <div class="card">
        <h2>Student Home</h2>
        <p>Welcome, {{auth.getUser().email}} (Student)</p>
        <button (click)="logout()">Logout</button>
      </div>
    </div>
  `,
  styles: [`.page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f5f7fb;}
            .card{width:360px;border:2px solid #0d3c99;border-radius:8px;background:#fff;padding:16px;}
            button{border:2px solid #0d3c99;background:#eaf1ff;color:#0d3c99;font-weight:700;padding:8px 18px;border-radius:6px;cursor:pointer;}`]
})
export class StudentComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout() { this.auth.clearSession(); this.router.navigateByUrl('/'); }
}
 