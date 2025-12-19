import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-student-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent {
  form: FormGroup;
  isSubmitting = false;
  errorMsg = '';
  successMsg = '';
 
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
  }
 
  private passwordsMatchValidator(group: FormGroup) {
    const p = group.get('password')?.value;
    const c = group.get('confirm')?.value;
    return p === c ? null : { mismatch: true };
  }
 
  hasError(name: string, code: string) {
    const ctrl = this.form.get(name);
    return !!ctrl && ctrl.touched && ctrl.hasError(code);
  }
 
  async register() {
    this.errorMsg = ''; this.successMsg = '';
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
 
    this.isSubmitting = true;
    const { email, password } = this.form.value;
 
    try {
      const res = await this.auth.registerStudent(email, password);
      if (res.ok) {
        this.successMsg = 'Registered successfully. Redirecting to Login…';
        setTimeout(() => this.router.navigateByUrl('/'), 900);
      } else {
        this.errorMsg = res.message || 'Registration failed.';
      }
    } catch (e) {
      console.error(e);
      this.errorMsg = 'Something went wrong. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
 