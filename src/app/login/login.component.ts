import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Role } from '../auth.service';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  role: Role = 'student';                      // default tab
  form: FormGroup;
  isSubmitting = false;
  errorMsg = '';
 
  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
 
  selectRole(role: Role) {
    this.role = role;
    this.errorMsg = '';
    this.form.reset(); // optional: clear fields when switching tabs
  }
 
  async login() {
    this.errorMsg = '';
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
 
    this.isSubmitting = true;
    const { email, password } = this.form.value;
 
    try {
      let ok = false;
      if (this.role === 'student') {
        ok = await this.auth.loginStudent(email, password);
      } else {
        ok = await this.auth.loginAdmin(email, password);
      }
 
      if (ok) {
        this.router.navigateByUrl(this.role === 'admin' ? '/admin' : '/student');
      } else {
        this.errorMsg = this.role === 'admin'
          ? 'Admin login failed. Check email/password.'
          : 'Student login failed. Check email/password.';
      }
    } catch (e) {
      console.error(e);
      this.errorMsg = 'Something went wrong. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
 
  // Only visible/active for Student tab
  newUser() { this.router.navigateByUrl('/register-student'); }
 
  hasError(name: string, code: string) {
    const ctrl = this.form.get(name);
    return !!ctrl && ctrl.touched && ctrl.hasError(code);
  }
}
 