import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="app-header">
      <div class="brand">Admin</div>
      <button class="logout" (click)="logout()">Logout</button>
    </header>
 
    <div class="page">
      <div class="card">
        <h2>Admin Dashboard</h2>
        <p>Welcome, {{ auth.getUser().email || 'Admin' }} (Admin)</p>
        <!-- page content goes here -->
      </div>
    </div>
  `,
  styles: [`
    .app-header{
      position: sticky; top:0;
      display:flex; align-items:center; justify-content:space-between;
      padding:10px 16px; background:#ffffff; border-bottom:1px solid #d7e3ff; z-index: 10;
    }
    .brand{ font-weight:700; color:#0d3c99; }
    .logout{ border:2px solid #0d3c99; background:#eaf1ff; color:#0d3c99; font-weight:700; padding:6px 14px; border-radius:6px; cursor:pointer; }
 
    .page{ min-height: calc(100vh - 52px); display:flex; align-items:center; justify-content:center; background:#f5f7fb; }
    .card{ width: 360px; border:2px solid #0d3c99; border-radius:8px; background:#fff; padding:16px; box-shadow:0 4px 18px rgba(0,0,0,0.08); }
  `]
})
export class AdminComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout() { this.auth.clearSession(); this.router.navigateByUrl('/'); }
}