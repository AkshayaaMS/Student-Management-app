import { Injectable } from '@angular/core';
 
export type Role = 'student' | 'admin';
 
export interface User {
  email: string;
  password: string; // In real apps, never store plain passwords on the client.
  role: Role;
}
 
@Injectable({ providedIn: 'root' })
export class AuthService {
  // Demo in-memory users. Replace with backend API calls in production.
  private users: User[] = [
    { email: 'admin@site.com', password: 'admin123', role: 'admin' } // Seed admin
  ];
 
  private loggedIn = false;
  private role: Role | null = null;
  private email: string | null = null;
 
  // -------- Student register only --------
  async registerStudent(email: string, password: string): Promise<{ ok: boolean; message?: string }> {
    await this.delay();
    if (this.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, message: 'Email already exists.' };
    }
    this.users.push({ email, password, role: 'student' });
    return { ok: true };
  }
 
  // -------- Student login --------
  async loginStudent(email: string, password: string): Promise<boolean> {
    await this.delay();
    const match = this.users.find(u => u.email.toLowerCase() === email.toLowerCase()
      && u.password === password && u.role === 'student');
    if (match) {
      this.loggedIn = true; this.role = 'student'; this.email = match.email;
      return true;
    }
    return false;
  }
 
  // -------- Admin login only (no register) --------
  async loginAdmin(email: string, password: string): Promise<boolean> {
    await this.delay();
    const match = this.users.find(u => u.email.toLowerCase() === email.toLowerCase()
      && u.password === password && u.role === 'admin');
    if (match) {
      this.loggedIn = true; this.role = 'admin'; this.email = match.email;
      return true;
    }
    return false;
  }
 
  clearSession() { this.loggedIn = false; this.role = null; this.email = null; }
  isAdmin(): boolean { return this.loggedIn && this.role === 'admin'; }
  isStudent(): boolean { return this.loggedIn && this.role === 'student'; }
  getUser() { return { email: this.email, role: this.role }; }
 
  private delay(ms: number = 500) { return new Promise(res => setTimeout(res, ms)); }
}