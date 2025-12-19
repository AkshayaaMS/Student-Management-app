import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { adminGuard } from './admin.guard';
 
export const routes: Routes = [
  { path: '', component: LoginComponent },                    // Landing (tabs)
  { path: 'register-student', component: StudentRegisterComponent }, // Only student can register
  { path: 'student', component: StudentComponent },           // Student home
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] }, // Admin dashboard
  { path: '**', redirectTo: '' }
];